import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShpState } from 'src/app/core/@ngrx';
import { getProducts, ProductsState, selectProducts, selectProductsState } from 'src/app/core/@ngrx/products';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { ProductModel } from '../../models/product';
import { ProductsPromiseService } from '../../services/products-promise.service';

@Component({
  selector: 'shp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public orderList: Array<keyof ProductModel> = ['price', 'isAvailable', 'name'];

  public orderProperty: keyof ProductModel = 'name';

  public orderingAsc: boolean = false;
  
  productsState$: Observable<ProductsState>;

  constructor(
    private cartService: CartService,
    private settingsService: AppSettingsService,
    private store: Store<ShpState>,
  ) { }


  ngOnInit(): void {
    console.log('We have a store! ', this.store);
    this.productsState$ = this.store.select(selectProductsState);

    this.store.dispatch(getProducts());

    this.settingsService.settings()
      .subscribe((v) => {
        this.orderList.forEach((o) => {
          if (o == v.sortOrder)
            this.orderProperty = o;
        });
      });
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
  }
}
