import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'shp-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItemsList: CartItem[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItemsList = this.cartService.getCartProducts();
  }

  identify(index: number, item: CartItem) {
    return item.product.id;
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  setCartItemAmount(data: { id: number, amount: number }): void {
    this.cartService.setCartItemAmount(data.id, data.amount);
  }

  removeCartItem(id: number): void {
    this.cartService.removeCartItem(id);
  }

  changeCartAmount(event: WheelEvent, cartItem: CartItem): void {
    let amount = cartItem.amount;
    if (event.deltaY == 100) {
      amount--;
    }
    else if (event.deltaY == -100) {
      amount++;
    }
    this.cartService.setCartItemAmount(cartItem.product.id, amount);
  }
}
