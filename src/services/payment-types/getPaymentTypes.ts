import { api } from ".."

export const getPaymentTypes = async () => {
  try {
    const { data } = await api.get('/payment-types');

    return data;
  } catch (error) {
    console.log({ error });

    return;
  }
}