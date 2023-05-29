import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductListComponent } from './component/products/products.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { DashboardComponent } from './page/dashboard/dashboard/dashboard.component';
import { ProductAdminComponent } from './page/product-admin/product-admin.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
const routes: Routes =[
  {path: '',component: HomePageComponent},
  {path:'products',component:ProductListComponent},
  { path: 'product/:id', component: ProductDetailComponent },
  {
    path: 'admin', component: LayoutAdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductAdminComponent },
      { path: "product/add", component: ProductAddComponent },
      { path: 'product/:id/edit', component: ProductEditComponent }
    ],
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
