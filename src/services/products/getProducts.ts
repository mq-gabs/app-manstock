import { api } from "..";
import { formatQuarey } from "../../utils";

interface IGetProducts {
  name?: string;
  code?: string;
  page?: string;
  pageSize?: string;
  initDate?: string;
  endDate?: string;
  initTime?: string;
  endTime?: string;
}

export const getProducts = async ({
  name,
  code,
  page,
  pageSize,
  initDate,
  endDate,
  initTime,
  endTime,
}: IGetProducts) => {
  try {
    const query = formatQuarey({
      name,
      code,
      page,
      pageSize,
      initDate,
      endDate,
      initTime,
      endTime,
    });

    const { data } = await api.get(`/products${query}`);

    return data;
  } catch (error) {
    console.log({ error });
    return;
  }
}