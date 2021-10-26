import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'shp-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItemsList$: Observable<CartItem[]>;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartItemsList$ = this.cartService.getProducts$();
  }

  identify(index: number, item: CartItem) {
    return item.product.id;
  }

  increaseCartItemAmount(id: number): void {
    this.cartService.increaseQuantity(id);
  }

  decreaseCartItemAmount(id: number): void {
    this.cartService.decreaseQuantity(id);
  }

  removeCartItem(id: number): void {
    this.cartService.removeProduct(id);
  }

  changeCartAmount(event: WheelEvent, cartItem: CartItem): void {
    event.stopPropagation();
    if (event.deltaY > 0) {
      this.cartService.decreaseQuantity(cartItem.product.id);
    }
    else if (event.deltaY < 0) {
      this.cartService.increaseQuantity(cartItem.product.id);
    }
  }
}
