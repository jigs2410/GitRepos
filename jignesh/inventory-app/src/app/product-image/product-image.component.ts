import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/product';

@Component({
  moduleId: module.id,
  selector: 'app-product-image',
  templateUrl: 'product-image.component.html',
  styleUrls: ['product-image.component.css'],
  inputs: ['product'],
})
export class ProductImageComponent implements OnInit {
  product:Product;
  constructor() {}

  ngOnInit() {
  }

}
