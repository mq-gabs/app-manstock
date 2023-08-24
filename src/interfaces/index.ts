export interface IProduct {
  id: string;
  name: string;
  price: number;
}

export interface IFormatedProduct extends IProduct {
  quantity: number;
}