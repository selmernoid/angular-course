import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { ShpState } from 'src/app/core/@ngrx';
import { CategoryType } from '../../models/category-type';
import { ProductModel } from '../../models/product';

import { ProductViewComponent } from './product-view.component';

describe('ProductViewComponent', () => {
  let component: ProductViewComponent;
  let storeSpy: jasmine.SpyObj<Store<ShpState>>;

  beforeEach(() => {
    storeSpy = jasmine.createSpyObj('Store', ['select']);
    component = new ProductViewComponent(storeSpy);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call select during OnInit', () => {
    // Arrange
    storeSpy.select.and.returnValue(EMPTY);
    // Act
    component.ngOnInit();
    // Assert
    expect(storeSpy.select).toHaveBeenCalled();
  });

  it('should copy the original object', fakeAsync(() => {
    // Arrange
    let original: ProductModel = <ProductModel>{
      id: 10,
      name: 'test product',
      category: CategoryType.Hardware,
      isAvailable: true,
      price: 15.5,
      description: 'test description',
      modifiedBy: ['nobody'],
    };
    storeSpy.select.and.returnValue(of(original));
    // Act
    component.ngOnInit();
    tick();
    // Assert
    expect(component.product).toEqual(original);
    original.id = 100;
    expect(component.product).not.toEqual(original);
  }));
});
