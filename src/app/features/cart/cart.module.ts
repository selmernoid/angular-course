import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const EXPORTED_COMPONENTS = [
  CartListComponent
];

@NgModule({
  declarations: [
    ...EXPORTED_COMPONENTS,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ...EXPORTED_COMPONENTS
  ]
})
export class CartModule { }
