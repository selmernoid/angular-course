import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/features/products/models/product';

export const getProducts = createAction('[Products] Get Products');
export const getProductsSuccess = createAction('[Products] Get Products Success', props<{ products: ProductModel[] }>());
export const getProductsError = createAction('[Products] Get Products Error', props<{ error: Error }>());

export const getProduct = createAction('[Products] Get Product', props<{ productId: number }>());
export const getProductSuccess = createAction('[Products] Get Product Success', props<{ product: ProductModel }>());
export const getProductError = createAction('[Products] Get Product Error', props<{ error: Error }>());
