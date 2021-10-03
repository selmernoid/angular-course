import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryType } from '../models/category-type';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(): Observable<Array<ProductModel>> {
    return of([
      { id: 10, name: 'Egg', category: CategoryType.Food, isAvailable: true, price: 5 },
      { id: 7, name: 'Windows', category: CategoryType.Software, isAvailable: true, price: 500 },
      { id: 1960, name: 'Zaporozhec', category: CategoryType.Car, isAvailable: false, price: 15.65 },
      { id: 8, name: 'Icecream', category: CategoryType.Food, isAvailable: true, price: 12.2 },
      { id: 100, name: 'AlphaZero', category: CategoryType.Software, isAvailable: false, price: 150000 },
      { id: 120, name: 'lower-case item', category: CategoryType.Software, isAvailable: false, price: 150000 },
    ]);
  }
}
