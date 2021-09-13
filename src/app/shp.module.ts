import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShpRoutingModule } from './shp-routing.module';
import { ShpComponent } from './shp.component';
import { FirstComponent } from './features/test/first/first.component';
import { CategoryType } from './features/products/models/category-type';
import { ProductComponent } from './features/products/components/product/product.component';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';
import { CartListComponent } from './features/cart/components/cart-list/cart-list.component';

@NgModule({
  declarations: [
    ShpComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartListComponent,
  ],
  imports: [
    BrowserModule,
    ShpRoutingModule
  ],
  providers: [],
  bootstrap: [ShpComponent]
})
export class AppModule { }
