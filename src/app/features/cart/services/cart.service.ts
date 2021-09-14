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
    let item = this.items.find(x => x.product.id === product.id);
    if (item) {
      item.amount++;
    } else {
      this.items.push(new CartItem(product, 1));
    }
  }

  setCartItemAmount(id: number, amount: number): void {
    if (amount <= 0) {
      this.removeCartItem(id);
      return;
    }
    var cart = this.items.find(x => x.product.id == id);
    if (cart) {
      cart.amount = amount;
    }
  }

  removeCartItem(id: number) {
    this.items.forEach((item, index) => {
      if (item.product.id == id) {
        this.items.splice(index, 1);
      }
    });
  }

  getCartProducts(): CartItem[] {
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, current) => sum + current.getTotalItemPrice(), 0);
  }
}
