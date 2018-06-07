import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




import {ProductCatalogue} from '../product.catalouge';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  displayedColumns = ['select', 'name', 'imageUrl', 'description', 'quanitity', 'price'];

  arrayOfProductCatalogue: ProductCatalogue[];

  dataSource: MatTableDataSource<Element>;
  data = ProductCatalogue;
  selection = new SelectionModel<Element>(true, []);

  idContact: string;
  idContract: string;



  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute ) {
    this.arrayOfProductCatalogue = [
      new ProductCatalogue(
      1,
      'Basisbox',
      '/assets/images/products/black-hat.jpg',
      ['7.45 x 3.5 x 2.5'],
      1,
      360.00),
      new ProductCatalogue(
      2,
      'EcoBox',
      '/assets/images/products/black-shoes.jpg',
      ['7.45 x 3.5 x 2.5'],
      1,
      120.00),
      new ProductCatalogue(
      3,
      'Premium-Box',
      '/assets/images/products/blue-jacket.jpg',
      ['7.45 x 3.5 x 2.5'],
      1,
      150.00),
      new ProductCatalogue(
      4,
      'Aussenplatz',
      '/assets/images/products/black-shoes.jpg',
      ['7.45 x 3.5 x 2.5'],
      1,
      200.00)
    ];
  }

  ngOnInit() {
  this.data = Object.assign(this.arrayOfProductCatalogue);
  this.dataSource =  new MatTableDataSource<Element>(Object.assign(this.data));
  this.idContract = this.route.snapshot.queryParams['idContract'];
  this.idContact = this.route.snapshot.queryParams['idContact'];
 }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  saveProduct() {
    this.selection.selected.forEach(item => {
      const index: number = this.dataSource.data.findIndex(d => d === item);
      this.dataSource.data.slice(index);
      const productCatalogue = this.data[index];
      console.log(this.data);
      console.log(this.data[index].name);
      console.log(productCatalogue);
      this.saveProcuct(productCatalogue);
    });
   this.selection = new SelectionModel<Element>(true, []);
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  saveProcuct(productCatalogue ) {
    this.http.post('/api/products/' + this.idContact + '/' +  this.idContract, productCatalogue)
      .subscribe(res => {
        this.router.navigate(['/product'], {queryParams: {idContract: this.idContract, idContact: this.idContact}});
      }, (err) => {
        console.log(err);
      }
    );
  }
}




