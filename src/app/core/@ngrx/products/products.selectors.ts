import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductModel } from 'src/app/features/products/models/product';
import { ProductsState } from '.';
import { selectRouteParams, selectRouterState } from '../router/router.selectors';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.data
);

export const selectEditedProductByUrl = createSelector(
  selectProducts,
  selectRouteParams,
  (products, params): ProductModel => {
    const productID = params.productID;
    if (productID && products) {
      const product = products.find(x => x.id == productID);
      if (product) { return product; }
    }

    return <ProductModel>{};
  }
);
