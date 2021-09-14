import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

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
    ShpRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [ShpComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
