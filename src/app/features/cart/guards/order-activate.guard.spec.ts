import { TestBed } from '@angular/core/testing';

import { OrderActivateGuard } from './order-activate.guard';

describe('OrderActivateGuard', () => {
  let guard: OrderActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OrderActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
