import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/features/products/models/product';
import { ProductsService } from 'src/app/features/products/services/products.service';

@Component({
  selector: 'shp-products-manage',
  templateUrl: './products-manage.component.html',
  styleUrls: ['./products-manage.component.scss']
})
export class ProductsManageComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }
  
  onEditTask(id: number): void {
    this.router.navigate(['/edit', id]);
  }
}
