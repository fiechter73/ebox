import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import {ProductCatalogue} from '../product.catalouge';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns = ['name', 'description', 'imageUrl', 'quanitity', 'price', 'productDetails'];

  productCatalogue: any;

   dataSource: MatTableDataSource<Element>;


  contract = {};
  idContact:  string;
  idContract: string;
  idProduct:  string;


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.idContract = this.route.snapshot.queryParams['idContract'];
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.idProduct = this.route.snapshot.queryParams['idProduct'];
    this.getContractDetail(this.idContact, this.idContract);
  }

  getContractDetail(idContact, idContract) {
    this.http.get('/api/products/' + idContact + '/' + idContract).subscribe(data => {
     this.contract = data;
     console.log(this.contract);
         // this.contract = Object.assign(data);
     this.dataSource =  new MatTableDataSource<Element>(Object.assign(data));
     console.log(this.dataSource);
    });
  }

}
