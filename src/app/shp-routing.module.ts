import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';
import { ProductViewComponent } from './features/products/components/product-view/product-view.component';
import { NotFoundComponent, RestrictedAccessComponent } from './shared/components';

const routes: Routes = [
  {
    path: 'products-list',
    data: { title: 'Products list' },
    component: ProductListComponent,
  },
  {
    path: 'product/:productID',
    data: { title: 'Product Item' },
    component: ProductViewComponent,
  },
  {
    path: 'cart',
    loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'restricted',
    component: RestrictedAccessComponent,
  },
  {
    path: '',
    redirectTo: 'products-list',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShpRoutingModule { }
