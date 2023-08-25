import { useState } from "react";
import { Button, Card, Input } from "../../components";
import { StyledNewProduct } from "./new-product.styles";
import { usePopUp } from "../../hooks";
import { createProduct } from "../../services";

interface ICreateProduct {
  name: string;
  code: string;
  price: number;
}

export const NewProduct = () => {
  document.title = 'Manstock - Novo Produto';
  const [code, setCode] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [products, setProducts] = useState<ICreateProduct[]>([]);
  const { popUp } = usePopUp();

  const clearInputs = () => {
    setName('');
    setPrice(undefined);
    setCode('');
  }

  const handleAddProduct = () => {
    if (!name || !price || !code) {
      popUp({
        message: 'Preencha todos os campos!',
        type: 'info',
      });
      return;
    }

    let check = true;

    products.forEach(product => {
      if (product.code === code) {
        check = false;
      }
    })

    if (!check) {
      popUp({
        message: 'Já existe um produto com esse código!',
        type: 'info',
        title: 'Atenção!'
      });
      return;
    }

    setProducts([...products, { code, name, price }]);
    clearInputs();
  }

  const handleRemoveProduct = (code: string) => {
    const newProducts = products.filter(product => product.code !== code);
    setProducts(newProducts);
  }

  const createProducts = async () => {
    const check = await Promise.all(
      products.map(async product => (
        await createProduct(product)
      ))
    );

    if (!check.every(val => val)) {
      popUp({
        message: 'Não foi possível criar os produtos!',
        type: 'warning',
      });
      return;
    }

    popUp({
      message: 'Produtos criados com sucesso!',
      type: 'success',
    });

    clearInputs()
    setProducts([]);
  }

  return (
    <StyledNewProduct>
      <div className="product-form">
        <h4>Cadastro de produtos</h4>
        <Input
          placeholder="Código do produto"
          icon="barCodePrimary"
          value={code}
          setValue={setCode}
        />
        <Input
          placeholder="Nome do produto"
          icon="name"
          value={name}
          setValue={setName}
        />
        <Input
          type="number"
          placeholder="Preço do produto"
          icon="ticket"
          value={price || ""}
          setValue={setPrice}
        />
        <Button
          text="adicionar à lista"
          iconName="addProduct"
          onClick={handleAddProduct}
        />
      </div>
      <div className="products-list-wrapper">
        <div className="products-list">
          {products.length !== 0 && products.map(product => (
            <Card
              key={product.code}
              name={product.name}
              price={product.price}
              onDelete={() => handleRemoveProduct(product.code)}
              code={product.code}
              simple
            />
          ))}
        </div>
        <div className="products-options">
            <h4>Total de produtos: {products.length}</h4>
            <Button
              text="cadastrar todos os produtos"
              iconName="registers"
              onClick={createProducts}
            /> 
        </div>
      </div>
    </StyledNewProduct>
  );
}