import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import {ProductViewComponent} from './product-view/product-view.component';


const routes:Routes = [
    {path:'products-list', component:ProductsListComponent},
    {path:'product-view/:id', component:ProductViewComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ProductRoutingModule {}