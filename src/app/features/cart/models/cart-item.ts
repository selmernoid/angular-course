import { ProductModel } from '../../products/models/product';

export class CartItem {
  constructor(
    public product: ProductModel,
    public amount: number,
    public added: Date = new Date(),
  ) { }

  getItemTotalPrice(): number {
    return this.amount * this.product.price;
  };
}
