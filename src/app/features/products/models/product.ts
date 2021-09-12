import { CategoryType } from './category-type';

export interface ProductModel {
  name: string;
  description?: string;
  price: number;
  category: CategoryType;
  isAvailable: boolean;
  modifiedBy?: string[];
}
