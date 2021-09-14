import { Injectable } from '@angular/core';
import { CategoryType } from '../models/category-type';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): ProductModel[] {
    return [
      { id: 10, name: 'Egg', category: CategoryType.Food, isAvailable: true, price: 5 },
      { id: 7, name: 'Windows', category: CategoryType.Software, isAvailable: true, price: 500 },
      { id: 1960, name: 'Zaporozhec', category: CategoryType.Car, isAvailable: false, price: 15.65 },
    ];
  }
}
