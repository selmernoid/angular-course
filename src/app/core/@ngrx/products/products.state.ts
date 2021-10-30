import { ProductModel } from 'src/app/features/products/models/product';

export interface ProductsState {
  data: ReadonlyArray<ProductModel>;
  edit: Readonly<ProductModel> | null;
}

export const initialState: ProductsState = {
  data: [],
  edit: null,
}