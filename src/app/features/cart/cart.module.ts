import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';

const EXPORTED_COMPONENTS = [
  CartListComponent
];

@NgModule({
  declarations: [
    ...EXPORTED_COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...EXPORTED_COMPONENTS
  ]
})
export class CartModule { }
