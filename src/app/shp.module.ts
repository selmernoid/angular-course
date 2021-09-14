import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShpRoutingModule } from './shp-routing.module';
import { ShpComponent } from './shp.component';
import { ProductsModule } from './features/products/products.module';
import { CartModule } from './features/cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './features/orders/orders.module';

@NgModule({
  declarations: [
    ShpComponent,
  ],
  imports: [
    ProductsModule,
    CartModule,
    OrdersModule,
    SharedModule,

    BrowserModule,
    ShpRoutingModule
  ],
  providers: [],
  bootstrap: [ShpComponent]
})
export class AppModule { }
