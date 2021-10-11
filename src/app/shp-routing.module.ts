import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';
import { ProductViewComponent } from './features/products/components/product-view/product-view.component';

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
    path: '**',
    redirectTo: 'products-list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShpRoutingModule { }
