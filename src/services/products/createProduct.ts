import { api } from "..";

interface ICreateProduct {
  name: string;
  code: string;
  price: number;
}

export const createProduct = async (productData: ICreateProduct) => {
  try {
    const { data } = await api.post('/products', productData);

    return data;
  } catch (error) {
    console.log({ error });

    return;
  }
}