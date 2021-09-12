import { Injectable } from '@angular/core';
import { CategoryType } from '../models/category-type';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  GetProducts(): ProductModel[] {
    return [
      { name: 'Egg', category: CategoryType.Food, isAvailable: true, price: 5 },
      { name: 'Windows', category: CategoryType.Software, isAvailable: true, price: 500 },
      { name: 'Zaporozhec', category: CategoryType.Car, isAvailable: false, price: 15.65 },
    ];
  }
}
