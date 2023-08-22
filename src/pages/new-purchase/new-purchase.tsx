import { useEffect, useState } from "react";
import { Button, Card, HMenu, Input, Loading } from "../../components";
import { StyledNewPurchase } from "./new-purchase.styles";
import Icon from "../../components/icon";

const mockedProducts = [
  {
    id: '0',
    name: 'Café maratá 300g',
    price: 5.8,
    quantity: 0,
  },
  {
    id: '1',
    name: 'Detergente Ypê 90ml',
    price: 3.8,
    quantity: 0,
  },
  {
    id: '2',
    name: 'Banana prata',
    price: 8.99,
    quantity: 0,
  },
  {
    id: '3',
    name: 'Nuggets de frango 500g',
    price: 14.90,
    quantity: 0,
  },
];

interface IProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const NewPurchase = () => {
  document.title = 'Manstock - Nova Compra';
  const [products, setProducts] = useState<IProduct[]>(mockedProducts);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(12.9);
  const [barCodeInput, setBarCodeInput] = useState<string>("");
  const [nameInput, setNameInput] = useState<string>("");
  const [selectedMenuOption, setSelectedMenuOption] = useState<number>(0);

  useEffect(() => {
    let total = 0;

    products.forEach((product: IProduct) => {
      total += product.quantity * product.price;
    });

    setTotal(total);
  }, [products])

  const handleSearchProdcut = () => {

  }

  const handleCancelPurchase = () => {

  }

  const handleAddProduct = () => {

  }

  const handleRemoveProduct = (id: string) => {
    const newProducts = products.filter((product: IProduct) => product.id !== id);
    setProducts(newProducts);
  }

  const handleFinishPurchase = () => {

  }

  const handleSetQuantity = (id: string, newValue: number) => {
    if (newValue === 0) {
      handleRemoveProduct(id);
      return;
    }

    const newProducts = products.map((product: IProduct) => (
      product.id === id ? { ...product, quantity: newValue } : product
    ));
    setProducts(newProducts);
  }

  return (
    <StyledNewPurchase>
      <div className="list">
        {products.length !== 0 && !isLoading && products.map((product: IProduct) => (
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
        </div>

        <div className="options-bottom">
          <p>TOTAL:</p>
          <h2>R$ {total.toFixed(2)}</h2>
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