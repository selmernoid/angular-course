import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Resolve, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { ProductModel } from '../../products/models/product';
import { ProductsService } from '../../products/services/products.service';

@Injectable({
  providedIn: 'any'
})
export class ResolveProductGuard implements Resolve<ProductModel> {
  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProductModel | Observable<ProductModel> | Promise<ProductModel> {
    if (!route.paramMap.has('productID')) {
      return of(<ProductModel>{});
    }

    const id = +route.paramMap.get('productID')!;
    return this.productsService.getProduct(id).pipe(
      switchMap((user: ProductModel) => {
        if (user) {
          return of(user);
        } else {
          this.router.navigate(['/products']);
          return EMPTY;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/products']);
        return EMPTY;
      }),
    );
  }
}