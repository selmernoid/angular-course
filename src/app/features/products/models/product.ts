import { CategoryType } from './category-type';

export interface ProductModel {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: CategoryType;
  isAvailable: boolean;
  modifiedBy?: string[];
}
