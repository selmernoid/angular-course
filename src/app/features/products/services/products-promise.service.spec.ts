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
import { TestBed } from '@angular/core/testing';
import { ProductsPromiseService } from './products-promise.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from '@angular/common/http/testing';

describe('ProductsPromiseService', () => {
  let service: ProductsPromiseService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsPromiseService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsPromiseService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('create an instance', () => {
    expect(service).toBeTruthy();
  });

  it('should call http request when retrieving products', () => {
    // Arrange

    // Act
    service.getProducts();
    // Assert
    const mockRequest: TestRequest = httpTestingController.expectOne(service.productsUrl);
    expect(mockRequest.cancelled).toBeFalsy();
    expect(mockRequest.request.responseType).toEqual('json');
    expect(mockRequest.request.method).toEqual('GET');
  });
});
