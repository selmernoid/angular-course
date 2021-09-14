import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { ProductModel } from '../../models/product';

@Component({
  selector: 'shp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  product: ProductModel;

  @Output()
  buyProduct: EventEmitter<number> = new EventEmitter<number>();

  onBuyProduct(): void {
    this.buyProduct.emit(this.product.id);
  }
}
