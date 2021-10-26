import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { ServerAPIToken } from 'src/app/core/tokens/server-config.token';
import { CartStorageModel } from '../models/cart-storage.model';

@Injectable({
  providedIn: 'root'
})
export class CartObservableService {
  get cartUrl() {
    return `${this.serverAPI}cart`;
  }

  constructor(
    private http: HttpClient,
    @Inject(ServerAPIToken) private serverAPI: string,
  ) {
  }

  getCart(): Observable<CartStorageModel> {
    return this.http.get<CartStorageModel>(this.cartUrl);
  }

  updateCart(cart: CartStorageModel) {
    const body = JSON.stringify(cart);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const request$ = this.http.post(this.cartUrl, body, options);
    return firstValueFrom(request$);
  }

  async clearCart(cart: CartStorageModel) {
    await this.http.delete(this.cartUrl);
  }
}
