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
    this.cartItemsList
  }

  identify(index: number, item: CartItem) {
     return (item.item.id, item.amount);
  }
}
