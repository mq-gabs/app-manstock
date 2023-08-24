import { api } from ".."

export const getRandomProduct = async () => {
  try {
    const { data } = await api.get('/products/random');

    return data;
  } catch (error) {
    console.log({ error });

    return;
  }
}