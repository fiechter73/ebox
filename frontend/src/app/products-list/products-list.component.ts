import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productList: Product[];
  @Output() outnProductSelected: EventEmitter<Product>;

  private currentProduct: Product;


  constructor() {
    this.outnProductSelected = new EventEmitter();
   }

  ngOnInit() {
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.outnProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if ( !product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}
