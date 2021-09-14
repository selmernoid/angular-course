import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'shp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];

  constructor(private productsService: ProductsService){}


  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
