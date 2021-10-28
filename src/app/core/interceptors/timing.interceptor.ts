import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { filter, Observable, tap } from 'rxjs';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {

  readonly urls = [
    '/cart'
  ];

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.urls.some((url) => request.url.indexOf(url) !== -1)) {
      const start = new Date();
      return next.handle(request).pipe(
        filter((e) => e.type == HttpEventType.Response),
        tap(() => {
          const end = new Date();
          const diff = end.getTime() - start.getTime();
          console.log(diff);
        })
      );
    }

    return next.handle(request);
  }
}
