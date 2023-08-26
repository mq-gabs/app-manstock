export interface IUserData {
  token: string;
  user: {
    created_at: string;
    email: string;
    id: string;
    name: string;
    password: string;
    profile_id: string;
    updated_at: string;
    profile: string;
  }
}

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

export interface IPaymentType {
  id: string;
  name: string;
}

export interface IFormatedPaymentType extends IPaymentType {
  value: string;
}

export interface ICreateResponse {
  message: string;
}

export interface ICreateProductResponse extends ICreateResponse {
  product: IProduct;
}