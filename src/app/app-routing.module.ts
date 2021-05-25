import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/categories', pathMatch: 'full'},
    {path: 'categories', component: CategoriesComponent},
    {path: 'products', component: ProductsComponent, children : [
        {path: ':id', component: ProductsComponent}]
    },
    {path: 'productDetails/:id', component: ProductDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }