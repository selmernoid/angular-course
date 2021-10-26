import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  ) { }


  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
  }
}
