import { ProductModel } from '../../products/models/product';

export class CartItem {
  public added: Date;
  constructor(
    public product: ProductModel,
    public amount: number) {
    this.added = new Date();
  }

  getItemTotalPrice(): number {
    return this.amount * this.product.price;
  };
}
