import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'Basisbox',
        'Box im Untergeschoss',
        '/assets/images/products/black-hat.jpg',
        ['A', 'B', 'C'],
        109.99),
      new Product(
        'ECO-Box',
        'Box im Obergeschoss',
        '/assets/images/products/black-shoes.jpg',
        ['E', 'F', 'G'],
        20.99),
      new Product(
        'Premium-Box',
        'Box im Obergeschoss',
        '/assets/images/products/blue-jacket.jpg',
        ['H', 'I', 'K'],
        10.99)
      ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }

  ngOnInit() {
  }

}
