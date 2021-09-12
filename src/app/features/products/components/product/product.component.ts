import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product';

@Component({
  selector: 'shp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  
  @Input()
  product: ProductModel;

  onAddToCart(){
    console.log('Item has been sold');
  }
}
