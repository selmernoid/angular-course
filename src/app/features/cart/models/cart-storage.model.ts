import { CartItem } from './cart-item';

export class CartStorageModel {
  products: CartItem[];
  quantity: number;
  sum: number;
}