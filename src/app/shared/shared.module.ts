import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';

import { HighlightDirective, NoScrollDirective, ClickShadowDirective } from './directives';
import { OrderByPipe } from './pipes/order-by.pipe';
import { NotFoundComponent, RestrictedAccessComponent } from './components';

const EXPORTED_MODULES = [
  CommonModule,
  FormsModule,
  MatSelectModule,
  MatCheckboxModule,
  RouterModule,
]
const EXPORTED_COMPONENTS = [
  HighlightDirective,
  NoScrollDirective,
  ClickShadowDirective,
  OrderByPipe,
  RestrictedAccessComponent,
  NotFoundComponent,
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
