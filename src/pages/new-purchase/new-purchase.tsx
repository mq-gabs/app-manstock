import { useEffect, useState } from "react";
import { Button, Card, HMenu, Input, Loading } from "../../components";
import { StyledNewPurchase } from "./new-purchase.styles";
import Icon from "../../components/icon";
import { IFormatedProduct, IProduct } from "../../interfaces";
import { getProductByCode, getProducts, getRandomProduct } from "../../services";
import { useAuth } from "../../hooks/auth";
import { usePopUp } from "../../hooks/toast";

export const NewPurchase = () => {
  document.title = 'Manstock - Nova Compra';
  const [products, setProducts] = useState<IFormatedProduct[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<IProduct[]>([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState<boolean>(false);
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
  const [isLoadingRandom, setIsLoadingRandom] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [barCodeInput, setBarCodeInput] = useState<string>("");
  const [nameInput, setNameInput] = useState<string>("");
  const [selectedMenuOption, setSelectedMenuOption] = useState<number>(0);
  const { userData } = useAuth();
  const [finishPurchaseStep, setFinishPurchaseStep] = useState<boolean>(false);
  const { popUp } = usePopUp();

  const handleSearchProdcut = () => {
    getAllProducts();
  }

  const handleCancelPurchase = async () => {
    setProducts([]);
    popUp({
      message: 'Você cancelou a compra!',
      type: 'warning',
      title: 'Aviso!',
    });
  }

  const addProduct = (data: IProduct) => {
    let exists = false;

    let newProducts = products.map(product => {
      if (product.id === data.id) {
        exists = true;
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    })

    if (!exists) {
      newProducts = [...products, {...data, quantity: 1 }];
    }

    setProducts(newProducts);
  }

  const handleAddProduct = async () => {
    if (!barCodeInput) {
      popUp({
        message: 'Preencha o campo do código de barras!',
        type: 'warning',
        title: 'Atenção!',
      });
      return;
    }

    setIsLoadingProduct(true);

    const data = await getProductByCode({ code: barCodeInput });

    setIsLoadingProduct(false);

    if (!data) {
      popUp({
        message: 'Código não encontrado',
        type: 'warning',
        title: 'Atenção!',
      });
      return;
    }

    addProduct(data);
  }

  const handleAddRandomProduct = async () => {
    setIsLoadingRandom(true);

    const data = await getRandomProduct();

    setIsLoadingRandom(false);

    if (!data) {
      popUp({
        message: 'Não foi possível buscar produto aleatório',
        type: "warning"
      });
      return;
    }
    
    addProduct(data);
  }
  
  const handleRemoveProduct = (id: string) => {
    const newProducts = products.filter((product: IFormatedProduct) => product.id !== id);
    setProducts(newProducts);
  }
  
  const handleFinishPurchase = () => {
    setFinishPurchaseStep(true);
  }

  const handleBackToOptions = () => {
    setFinishPurchaseStep(false);
  }
  
  const handleSetQuantity = (id: string, newValue: number) => {
    if (newValue === 0) {
      handleRemoveProduct(id);
      return;
    }
    
    const newProducts = products.map((product: IFormatedProduct) => (
      product.id === id ? { ...product, quantity: newValue } : product
    ));
    setProducts(newProducts);
  }
  
  const getAllProducts = async () => {
    setIsLoadingSearch(true);

    const data = await getProducts({
      name: nameInput,
      code: barCodeInput,
    });

    setIsLoadingSearch(false);

    if (!data) return;

    setSearchedProducts(data[0]);
  }
  
  useEffect(() => {
    let total = 0;
    
    products.forEach((product: IFormatedProduct) => {
      total += product.quantity * product.price;
    });

    setTotal(total);
  }, [products])
    
  return (
    <StyledNewPurchase finish={finishPurchaseStep}>
    <div className="list">
      {products.length !== 0 && products.map((product: IFormatedProduct) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          setQuantity={(newValue: number) => handleSetQuantity(product.id, newValue)}
          onDelete={() => handleRemoveProduct(product.id)}
          />
        ))}
        
        {products.length === 0 && (
          <div className="empty-purchase-list">
            <Icon name="carGrey" size={1.5} />
            <h3>Sua lista está vazia...</h3>
          </div>
        )}
      </div>

      <div className="options">
        <div className="options-top">
          <Button
            text="cancelar compra"
            iconName="cancel"
            onClick={handleCancelPurchase}
            color="secondary"
          />
        </div>

        {!finishPurchaseStep && (
          <div className="options-middle">
            <HMenu
              options={[
                { id: 0, name: 'adicionar produto' },
                { id: 1, name: 'consultar preço' }
              ]}
              selected={selectedMenuOption}
              setSelected={setSelectedMenuOption}
            />
            <Input
              type="number"
              icon="barCodePrimary"
              value={barCodeInput}
              setValue={setBarCodeInput}
              placeholder="123456789"
            />
            {selectedMenuOption === 1 && (
              <Input
                icon="name"
                value={nameInput}
                setValue={setNameInput}
                placeholder="Nome do Produto"
              />
            )}
            <Button
              text={selectedMenuOption === 0 ? "adicionar" : 'pesquisar'}
              onClick={selectedMenuOption === 0 ? handleAddProduct : handleSearchProdcut}
              iconName={selectedMenuOption === 0 ? "addProduct" : "searchWhite"}
              isLoading={selectedMenuOption === 0 ? isLoadingProduct : isLoadingSearch}
            />
            {selectedMenuOption === 0 && userData.user.profile === 'admin' && (
              <Button
                text="adicionar produto aleatório"
                onClick={handleAddRandomProduct}
                iconName="addProduct"
                color="secondary"
                isLoading={isLoadingRandom}
              />
            )}
            {selectedMenuOption === 1 && (
              <div className="searched-products">
              {searchedProducts.length !== 0 && searchedProducts?.map(product => (
                <Card
                  key={product.id}
                  simple
                  name={product.name}
                  price={product.price}
                  code={product.code}
                />
              ))}

              {searchedProducts.length === 0 && (
                <div className="no-product">
                  <p>Nenhum produto encontrado...</p>
                </div>
              )}
              </div>
            )}
          </div>
        )}

        <div className="options-bottom">
          {finishPurchaseStep && (
            <Button
              text="voltar"
              iconName="back"
              color="secondary"
              onClick={handleBackToOptions}
            />
          )}
          <div className="options-bottom-text">
            <p>TOTAL:</p> 
            <h2>R$ {total.toFixed(2)}</h2>
          </div>
          {!finishPurchaseStep && (
            <Button
              text="finalizar compra"
              iconName="checkCar"
              onClick={handleFinishPurchase}
            />
          )}
        </div>
      </div>
    </StyledNewPurchase>
  );
}