import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects, OnRunEffects, EffectNotification } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { firstValueFrom, map, Observable, switchMap } from 'rxjs';
import { ProductsPromiseService } from 'src/app/features/products/services/products-promise.service';
import { getProduct, getProductError, getProducts, getProductsError, getProductsSuccess, getProductSuccess } from '.';

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productsPromiseService: ProductsPromiseService,
  ) {
    console.log('[PRODUCTS EFFECTS]');
  }

  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      switchMap(action =>
        this.productsPromiseService
          .getProducts()
          .then(data => getProductsSuccess({ products: data }))
          .catch(error => getProductsError({ error }))
      )
    )
  );

  getProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getProduct),
      map(action => action.productId),
      switchMap(id => {
        return firstValueFrom(this.productsPromiseService.getProduct(id))
          .then(data => getProductSuccess({ product: data }))
          .catch(error => getProductError({ error }))
      }),
    )
  );

  // createUpdateTaskSuccess$: Observable<Action> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(TasksActions.createTaskSuccess, TasksActions.updateTaskSuccess),
  //     map(action =>
  //       RouterActions.go({
  //         path: ['/home']
  //       })
  //     )
  //   );
  // });

}
