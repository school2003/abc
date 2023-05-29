import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './component/products/products.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
// import { HomePageComponent } from './component/page/home-page/home-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DashboardComponent } from './page/dashboard/dashboard/dashboard.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
// import { ProductAdminComponent } from './component/page/admin/product-admin/product-admin.component';
import { ProductAdminComponent } from './page/product-admin/product-admin.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    HomePageComponent,
    DashboardComponent,
    LayoutAdminComponent,
    ProductAdminComponent,
    PageNotFoundComponent,
    ProductEditComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
