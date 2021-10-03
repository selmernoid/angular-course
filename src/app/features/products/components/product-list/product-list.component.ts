import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { ProductModel } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'shp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public orderList: Array<keyof ProductModel> = ['price', 'isAvailable', 'name'];

  public orderProperty: keyof ProductModel = 'name';

  public orderingAsc: boolean = false;

  products$: Observable<ProductModel[]>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
  ) { }


  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
  }
}
