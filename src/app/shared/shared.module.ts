import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HighlightDirective } from './directives/highlight.directive';
import { NoScrollDirective } from './directives/no-scroll.directive';
import { ClickShadowDirective } from './directives/click-shadow.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

const EXPORTED_MODULES = [
  CommonModule,
  FormsModule,
  MatSelectModule,
  MatCheckboxModule,
]
const EXPORTED_COMPONENTS = [
  HighlightDirective,
  NoScrollDirective,
  ClickShadowDirective,
  OrderByPipe,
];

@NgModule({
  declarations: [
    ...EXPORTED_COMPONENTS,
  ],
  exports: [
    ...EXPORTED_COMPONENTS,
    ...EXPORTED_MODULES,
  ],
  imports: [
    ...EXPORTED_MODULES
  ]
})
export class SharedModule { }
