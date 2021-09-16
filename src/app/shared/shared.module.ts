import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';

const EXPORTED_COMPONENTS = [
  HighlightDirective,
];

@NgModule({
  declarations: [
    ...EXPORTED_COMPONENTS,
  ],
  exports: [
    ...EXPORTED_COMPONENTS,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
