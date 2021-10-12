import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthGuard,
  ResolveProductGuard,
  SaveChangesGuard,
} from './guards';
import { OrdersComponent, ProductAddComponent, ProductEditComponent, ProductsManageComponent } from './components';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: 'products',
        component: ProductsManageComponent,
      },
      {
        path: 'product',
        children: [
          {
            path: 'add',
            component: ProductAddComponent,
          },
          {
            path: 'edit/:productID',
            component: ProductEditComponent,
            canDeactivate: [SaveChangesGuard],
            resolve: {
              product: ResolveProductGuard
            }
          }
        ]
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [ProductsManageComponent, ProductAddComponent, ProductEditComponent, OrdersComponent];
}
