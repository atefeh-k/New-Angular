import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../Shared/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
 list:ProductModel[] = [];
 model:ProductModel=new ProductModel();
  constructor() { }

  ngOnInit(): void {
  }
  addToList(){
    this.list.push(this.model)
    this.model=new ProductModel()
  }

  saveToDataBase(){
    
  }

}
