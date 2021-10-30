import { Action, createReducer, on } from '@ngrx/store';
import { getProductsError, getProductsSuccess } from '.';
import { getProduct, getProducts } from './products.actions';
import { initialState, ProductsState } from './products.state';


const reducer = createReducer(
  initialState,
  on(getProducts, (state) => {
    console.log('GET_PRODUCTS action being handled!');
    return {
      ...state,
      state
    };
  }),
  on(getProductsSuccess, (state, { products }) => {
    console.log('GET_PRODUCTS_SUCCESS action being handled!');
    return {
      ...state,
      data: products
    };
  }),
  on(getProduct, (state) => state),
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}