import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Array<CartItem> = [];

  constructor() { }

  buyProduct(product: ProductModel): void {
    let item = this.items.find(x => x.item.id === product.id);
    if (item) {
      item.amount++;
    } else {
      this.items.push(new CartItem(product, 1));
    }
  }

  getCartProducts(): CartItem[] {
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, current) => sum + current.getTotalItemPrice(), 0);
  }
}
