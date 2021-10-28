import { Component, OnInit } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
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

  products$: Promise<ProductModel[]>;

  constructor(
    private productsService: ProductsPromiseService,
    private cartService: CartService,
    private settingsService: AppSettingsService,
  ) { }


  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
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
