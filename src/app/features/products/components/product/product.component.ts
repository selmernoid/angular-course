import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShpState } from 'src/app/core/@ngrx';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { ProductModel } from '../../models/product';
import * as RouterActions from './../../../../core/@ngrx/router/router.actions';

@Component({
  selector: 'shp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(
    private store: Store<ShpState>,
  ) { }

  @Input()
  product: ProductModel;

  @Output()
  buyProduct: EventEmitter<number> = new EventEmitter<number>();

  onBuyProduct(): void {
    this.buyProduct.emit(this.product.id);
  }

  onViewProduct(id: number): void {
    const link = ['/product', id];
    this.store.dispatch(RouterActions.go({
      path: link
    }));
  }
}
