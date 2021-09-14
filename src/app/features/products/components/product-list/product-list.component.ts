import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { ProductModel } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'shp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
  ) { }


  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onAddToCart(productId: number): void {
    const product = this.products.find(x => x.id == productId);
    if (product) {
      this.cartService.buyProduct(product);
    }
  }
}
