import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

const LOCAL_COMPONENTS = [
  CartItemComponent
];

@NgModule({
  declarations: [
    ...CartRoutingModule.components,
    ...LOCAL_COMPONENTS,
  ],
  imports: [
    SharedModule,
    FontAwesomeModule,
    CartRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CartModule { }
