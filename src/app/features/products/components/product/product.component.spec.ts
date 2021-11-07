import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionCreator, Store } from '@ngrx/store';
import { ProductModel } from '../../models/product';
import * as RouterActions from './../../../../core/@ngrx/router/router.actions';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  let storeSpy: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    storeSpy = jasmine.createSpyObj('Store', ['dispatch']);
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [
        { provide: Store, useValue: storeSpy },
      ],
    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = <ProductModel>{};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dispatch with correct url', () => {
    // Arrange
    const productId = 10;
    // Act
    component.onViewProduct(productId);
    // Assert    
    expect(storeSpy.dispatch).toHaveBeenCalled();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(<jasmine.AsymmetricMatcher<any>>{
      asymmetricMatch: function (compareTo) {
        return compareTo.type === RouterActions.go.type &&
          compareTo.path.length == 2 && compareTo.path[0] === '/product' && compareTo.path[1] === productId;
      },
      jasmineToString: function () {
        return '<spy dispatch>';
      }
    });
  });
});
