import { ProductModel } from '../../products/models/product';

export interface CartItem {
  item: ProductModel;
  amount: number;
}
