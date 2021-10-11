import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'shp-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  public product$: Observable<ProductModel>;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return this.productService.getProduct(+params.get('productID')!);
        })
      );
  }

}
