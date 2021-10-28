import { Inject, Injectable } from '@angular/core';
import { ServerAPIToken } from 'src/app/core/tokens/server-config.token';

import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { ProductModel } from '../models/product';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsPromiseService {
  get productsUrl() {
    return `${this.serverAPI}products/`;
  }

  private productUrl(id: number) {
    return `${this.productsUrl}${id}`;
  }

  constructor(
    @Inject(ServerAPIToken) private serverAPI: string,
    private http: HttpClient,
  ) { }

  getProducts(): Promise<ProductModel[]> {
    return firstValueFrom(this.http.get<ProductModel[]>(this.productsUrl));
  }

  getProduct(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.productUrl(id));
  }
}
