import { Component, Input } from '@angular/core';
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

  constructor(private cartService: CartService) { }

  onAddToCart(): void {
    this.cartService.buyProduct(this.product);
  }
}
