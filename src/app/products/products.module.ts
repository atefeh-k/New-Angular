import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './products.routing.module';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  exports:[
    ProductsListComponent
  ]
})
export class ProductsModule { }
