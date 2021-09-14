import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';


const EXPORTED_COMPONENTS = [
  ProductListComponent
];

@NgModule({
  declarations: [
    ...EXPORTED_COMPONENTS,
    ProductComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...EXPORTED_COMPONENTS
  ]
})
export class ProductsModule { }
