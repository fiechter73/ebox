import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  displayedColumns = ['select', 'name', 'imageUrl', 'description', 'quanitity', 'price'];

  newProduct: Product[];

  data = Object.assign(PRODUCT_DATA);
  dataSource = new MatTableDataSource<Element>(this.data);
  selection = new SelectionModel<Element>(true, []);

  constructor(private http: HttpClient, private router: Router) {
    console.log(this.data);
  }

  ngOnInit() {
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  saveProduct() {
    this.selection.selected.forEach(item => {
      const index: number = this.data.findIndex(d => d === item);
     // console.log(this.data.findIndex(d => d === item));
      this.data.slice(index);
     this.newProduct.push( {position: 1, name: 'Basisbox', imageUrl: '/assets/images/products/black-hat.jpg',
     description: ['7.45 x 3.5 x 2.5'], quanitity: 1 , price: 360.00});
      console.log(this.data[index].position);
     // this.dataSource = new MatTableDataSource<Element>(this.data);
    });
   // this.selection = new SelectionModel<Element>(true, []);
   console.log(this.newProduct);
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

 // save(Product: product) {
 //   this.http.post('/api/products', )
 //     .subscribe(res => {
 //        this.router.navigate(['/product']);
 //       }, (err) => {
 //         console.log(err);
 //       }
 //     );
 // }



}

export interface Product {
  position: number;
  name: string;
  imageUrl: string;
  description: string[];
  quanitity: number;
  price: number;
}

const PRODUCT_DATA: Product[] = [
  {position: 1, name: 'Basisbox', imageUrl: '/assets/images/products/black-hat.jpg',
     description: ['7.45 x 3.5 x 2.5'], quanitity: 1 , price: 360.00},
  {position: 1, name: 'Basisbox', imageUrl: '/assets/images/products/black-hat.jpg',
     description: ['7.45 x 3.5 x 2.5'], quanitity: 1 , price: 110.00},
  {position: 1, name: 'Basisbox', imageUrl: '/assets/images/products/black-hat.jpg',
     description: ['7.45 x 3.5 x 2.5'], quanitity: 1 , price: 200.00}
];



