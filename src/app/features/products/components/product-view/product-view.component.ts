import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShpState } from 'src/app/core/@ngrx';
import { selectEditedProductByUrl } from 'src/app/core/@ngrx/products';
import { ProductModel } from '../../models/product';

@Component({
  selector: 'shp-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  public product!: ProductModel;

  constructor(
    private store: Store<ShpState>,
  ) { }

  ngOnInit(): void {
    this.store.select(selectEditedProductByUrl)
      .subscribe((product: ProductModel) => {
        this.product = { ...product }
      });
  }

}
