import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ShpState } from 'src/app/core/@ngrx';
import { getProduct, getProductSuccess, selectEditedProductByUrl } from 'src/app/core/@ngrx/products';
import { ProductModel } from '../../models/product';
import { ProductsPromiseService } from '../../services/products-promise.service';

@Component({
  selector: 'shp-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  public product!: ProductModel;

  constructor(
    private store: Store<ShpState>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.store.select(selectEditedProductByUrl)
      .subscribe((product: ProductModel) => {
        this.product = { ...product }
      });
  }

}
