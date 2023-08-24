import { api } from "..";

export const getProductByCode = async ({ code }: { code: string }) => {
  try {
    const { data } = await api.get(`/products/code/${code}`);

    return data;
  } catch (error) {
    console.log({ error });
    return;
  }
}