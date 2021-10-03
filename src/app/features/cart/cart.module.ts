import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';

const EXPORTED_COMPONENTS = [
  CartListComponent
];
const LOCAL_COMPONENTS = [
  CartItemComponent
];

@NgModule({
  declarations: [
    ...EXPORTED_COMPONENTS,
    ...LOCAL_COMPONENTS
  ],
  imports: [
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    ...EXPORTED_COMPONENTS
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CartModule { }
