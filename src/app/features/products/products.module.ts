import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductViewComponent } from './components/product-view/product-view.component';


const EXPORTED_COMPONENTS = [
  ProductListComponent
];

@NgModule({
  declarations: [
    ...EXPORTED_COMPONENTS,
    ProductComponent,
    ProductViewComponent,
    
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ...EXPORTED_COMPONENTS
  ]
})
export class ProductsModule { }
