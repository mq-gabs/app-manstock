import { api } from "..";

interface IUpdateUser {
  id: string;
  name: string;
  email: string;
  oldPassword: string;
  newPassword: string;
}

export const updateUser = async (
  params: IUpdateUser
) => {
  try {
    const data = api.patch(`/users${params.id}`, {
      name: params.name,
      email: params.email,
      oldPassword: params.oldPassword,
      newPassword: params.newPassword,
    });

    return data;
  } catch (error) {
    console.log({ error });

    return;
  }
}