import { useEffect, useState } from "react";
import { Button, Card, HMenu, Input, Loading } from "../../components";
import { StyledNewPurchase } from "./new-purchase.styles";
import Icon from "../../components/icon";
import { IFormatedProduct, IProduct } from "../../interfaces";

const mockedFormatedProducts = [
  {
    id: 'a0',
    name: 'Café maratá 300g',
    price: 5.8,
    quantity: 0,
  },
  {
    id: 'a1',
    name: 'Detergente Ypê 90ml',
    price: 3.8,
    quantity: 0,
  },
  {
    id: 'a2',
    name: 'Banana prata',
    price: 8.99,
    quantity: 0,
  },
  {
    id: 'a3',
    name: 'Nuggets de frango 500g',
    price: 14.90,
    quantity: 0,
  },
];

const mockedProducts = [
  {
    id: 'b0',
    name: 'Café maratá 300g',
    price: 5.9,
  },
  {
    id: 'b1',
    name: 'Detergente Ypê 90ml',
    price: 3.8,
  },
  {
    id: 'b2',
    name: 'Detergente Ypê 90ml',
    price: 3.8,
  },
  {
    id: 'b3',
    name: 'Detergente Ypê 90ml',
    price: 3.8,
  },
  {
    id: 'b4',
    name: 'Detergente Ypê 90ml',
    price: 3.8,
  },
];

export const NewPurchase = () => {
  document.title = 'Manstock - Nova Compra';
  const [products, setProducts] = useState<IFormatedProduct[]>(mockedFormatedProducts);
  const [searchedProducts, setSearchedProducts] = useState<IProduct[]>(mockedProducts);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [barCodeInput, setBarCodeInput] = useState<string>("");
  const [nameInput, setNameInput] = useState<string>("");
  const [selectedMenuOption, setSelectedMenuOption] = useState<number>(0);

  useEffect(() => {
    let total = 0;

    products.forEach((product: IFormatedProduct) => {
      total += product.quantity * product.price;
    });

    setTotal(total);
  }, [products])

  const handleSearchProdcut = () => {
    setIsLoading(isLoading);
    setSearchedProducts(mockedProducts);
  }

  const handleCancelPurchase = () => {

  }

  const handleAddProduct = () => {

  }

  const handleRemoveProduct = (id: string) => {
    const newProducts = products.filter((product: IFormatedProduct) => product.id !== id);
    setProducts(newProducts);
  }

  const handleFinishPurchase = () => {

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

  return (
    <StyledNewPurchase>
      <div className="list">
        {products.length !== 0 && !isLoading && products.map((product: IFormatedProduct) => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            setQuantity={(newValue: number) => handleSetQuantity(product.id, newValue)}
            onDelete={() => handleRemoveProduct(product.id)}
          />
        ))}
        
        {products.length === 0 && !isLoading && (
          <div className="empty-purchase-list">
            <Icon name="carGrey" />
            <h3>Sua lista está vazia...</h3>
          </div>
        )}

        {isLoading && (
          <Loading />
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
          />
          {selectedMenuOption === 1 && (
            <div className="searched-products">
            {searchedProducts.length !== 0 && searchedProducts?.map(product => (
              <Card
                key={product.id}
                simple
                name={product.name}
                price={product.price}
                quantity={0}
                setQuantity={() => {}}
                onDelete={() => {}}
              />
            ))}

            {searchedProducts.length === 0 && (
              <p>Nenhum produto encontrado...</p>
            )}
            </div>
          )}
        </div>

        <div className="options-bottom">
          <div className="options-bottom-text">
            <p>TOTAL:</p> 
            <h2>R$ {total.toFixed(2)}</h2>
          </div>
          <Button
            text="finalizar compra"
            iconName="checkCar"
            onClick={handleFinishPurchase}
          />
        </div>
      </div>
    </StyledNewPurchase>
  );
}