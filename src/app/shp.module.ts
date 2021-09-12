import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShpRoutingModule } from './shp-routing.module';
import { ShpComponent } from './shp.component';
import { FirstComponent } from './features/test/first/first.component';
import { CategoryType } from './features/test/first/category-type';

@NgModule({
  declarations: [
    ShpComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    ShpRoutingModule
  ],
  providers: [],
  bootstrap: [ShpComponent]
})
export class AppModule { }
