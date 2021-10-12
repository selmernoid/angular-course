import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { OrderActivateGuard } from './guards/order-activate.guard';

const routes: Routes = [
  {
    path: 'order',
    component: ProcessOrderComponent,
    canLoad: [],
    canActivate: [OrderActivateGuard],
  },
  {
    path: 'cart',
    component: CartListComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
  static components = [CartListComponent, ProcessOrderComponent];
}