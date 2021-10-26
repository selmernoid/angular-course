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
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './features/admin/admin.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ShpComponent,
  ],
  imports: [
    ProductsModule,
    CartModule,
    AdminModule,
    OrdersModule,
    SharedModule,
    CoreModule,
    HttpClientModule,

    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ShpRoutingModule,
  ],
  providers: [],
  bootstrap: [ShpComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
