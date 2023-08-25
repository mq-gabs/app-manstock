import { api } from "..";

interface ICreateProduct {
  name: string;
  code: string;
  price: number;
}

export const createProduct = async (productData: ICreateProduct) => {
  try {
    const response = await api.post('/products', productData);

    return response;
  } catch (error) {
    console.log({ error });

    return;
  }
}