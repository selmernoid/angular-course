import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ProductModel } from '../../products/models/product';
import { CartItem } from '../models/cart-item';
import { CartStorageModel } from '../models/cart-storage.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: Array<CartItem> = [];

  public totalQuantity: number = 0;

  public totalSum: number = 0;

  private cartStorageKey = 'cart';

  constructor(
    private storage: StorageService
  ) {
    const previousState = this.storage.getData<CartStorageModel>(this.cartStorageKey);
    if (previousState !== null) {
      const { products, quantity, sum } = previousState!;
      this.cartProducts = (products ?? []).map(x => new CartItem({ ...x.product }, x.amount));
      this.totalQuantity = quantity ?? 0;
      this.totalSum = sum ?? 0;
    }
  }

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
    this.storage.saveData(this.cartStorageKey, <CartStorageModel>{
      products: this.cartProducts,
      quantity: this.totalQuantity,
      sum: this.totalSum,
    });
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
