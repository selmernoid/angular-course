import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'shp-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input()
  cart: CartItem;

  @Output()
  remove: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  setAmount: EventEmitter<{ id: number, amount: number }> = new EventEmitter<{ id: number, amount: number }>();

  removeCartItem(): void {
    this.remove.emit(this.cart.product.id);
  }

  addItem(): void {
    this.setAmount.emit({ id: this.cart.product.id, amount: this.cart.amount + 1 });
  }

  reduceItem(): void {
    this.setAmount.emit({ id: this.cart.product.id, amount: this.cart.amount - 1 });
  }
}
