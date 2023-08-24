import { api } from "..";

interface ISignIn {
  authData: { email: string, password: string };
}

export const signIn = async ({
  authData,
}: ISignIn) => {
  try {
    const { data } = await api.post('/auth', authData);
    console.log({ data });
  } catch (error) {
    console.log({ error });
  }
}