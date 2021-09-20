import { ArgumentOutOfRangeError } from 'rxjs';
import { ProductModel } from '../../products/models/product';

export class CartItem {
  constructor(
    public product: ProductModel,
    public amount: number) { }


    // может быть getItemTotalPrice?
  getTotalItemPrice(): number {
    return this.amount * this.product.price;
  };
}
