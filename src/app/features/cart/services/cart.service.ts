import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: Array<CartItem> = [];

  public totalQuantity: number = 0;

  public totalSum: number = 0;

  constructor() { }

  isEmptyCart = () => !this.cartProducts.length;

  getProducts(): CartItem[] {
    return this.cartProducts;
  }

  addProduct(product: ProductModel, amount: number = 1): void {
    let item = this.cartProducts.find(x => x.product.id === product.id);
    if (item) {
      item.amount += amount;
    } else {
      this.cartProducts.push(new CartItem({ ...product }, amount));
    }
    this.updateCartData();
  }

  removeAllProducts() {
    this.cartProducts = [];
    this.updateCartData();
  }

  removeProduct(id: number) {
    this.cartProducts.forEach((item, index) => {
      if (item.product.id == id) {
        this.cartProducts.splice(index, 1);
      }
    });
    this.updateCartData();
  }

  increaseQuantity = (id: number, amount: number = 1) => this.changeQuantity(id, amount);

  decreaseQuantity = (id: number, amount: number = 1) => this.changeQuantity(id, -amount);

  private updateCartData() {
    this.totalQuantity = this.cartProducts.reduce((sum, current) => sum + current.amount, 0);
    this.totalSum = this.cartProducts.reduce((sum, current) => sum + current.getItemTotalPrice(), 0);
  }

  private changeQuantity(id: number, amount: number): void {
    var cart = this.cartProducts.find(x => x.product.id == id);
    if (cart) {
      cart.amount += amount;
      if (cart.amount <= 0) {
        this.removeProduct(id);
      }
    }
    this.updateCartData();
  }
}
