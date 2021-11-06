import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CartService } from '../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderActivateGuard implements CanActivate, CanLoad {
  constructor(
    private cartService: CartService,
  ) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.cartIsNotEmpty();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.cartIsNotEmpty();
  }

  private cartIsNotEmpty(): Observable<boolean> {
    return this.cartService.isEmptyCart().asObservable()
      .pipe(
        map((v) => !v)
      );
  }

}
