import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Array<CartItem> = [];

  constructor() { }

  buyProduct(product: ProductModel){
    let item = this.items.find(x=> x.item.id === product.id);
    if (item){
      item.amount++;
    } else{
      this.items.push({item: product, amount: 1});
    }
  }

  getCartProducts(): CartItem[] {
    return this.items;
  }
}
