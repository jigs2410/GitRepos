import { Component, OnInit, EventEmitter } from '@angular/core';

import {ProductRowComponent} from '../product-row/product-Row.component';
import {Product} from '../shared/product';


@Component({
  moduleId: module.id,
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css'],
  directives:[ ProductRowComponent],
  inputs :['productList'],
  outputs :['onProductSelected']
})

export class ProductListComponent implements OnInit {

  productList : Product[];
  currentProduct : Product;

  onProductSelected : EventEmitter<Product>;
 
  constructor() {
    this.onProductSelected =new EventEmitter();

  }

  ngOnInit() {
  }

  productWasSelected(product:Product):void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);

  }

  isSelected(product: Product) :boolean {
    if(!product || !this.currentProduct)
      return false;

     return product.sku === this.currentProduct.sku ;

  }

}
