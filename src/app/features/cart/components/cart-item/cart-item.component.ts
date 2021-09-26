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
  increaseAmount: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  decreaseAmount: EventEmitter<void> = new EventEmitter<void>();

  removeCartItem(): void {
    this.remove.emit(this.cart.product.id);
  }

  addItem(): void {
    this.increaseAmount.emit();
  }

  reduceItem(): void {
    this.decreaseAmount.emit();
  }
}
