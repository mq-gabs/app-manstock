export interface IProduct {
  id: string;
  name: string;
  price: number;
  code: string;
}

export interface IFormatedProduct extends IProduct {
  quantity: number;
}

export type TToastTypes = 'info' | 'warning' | 'success';

export interface IToastElement {
  id: string;
  message: string;
  type: TToastTypes;
  title?: string;
}