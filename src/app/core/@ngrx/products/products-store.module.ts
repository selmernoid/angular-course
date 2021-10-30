import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsEffects, productsReducer } from '.';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ]
})
export class ProductsStoreModule { }
