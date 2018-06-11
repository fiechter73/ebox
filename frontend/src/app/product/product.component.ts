import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductCatalogue} from '../product.catalouge';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns = ['name', 'description', 'imageUrl', 'quanitity', 'price', 'productDetails'];

  contract = {};
  product: any;
  idContact:  string;
  idContract: string;
  idProduct:  string;


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.idContract = this.route.snapshot.queryParams['idContract'];
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContractDetail(this.idContact, this.idContract);
  }

//  getContractDetail(idContact, idContract) {
//    this.http.get('/api/products/' + idContact + '/' + idContract).pipe(
//      map(res => {
//        console.log(res);
//        return res['prodcuts'];
//      }) // or any other operator
//    )
//    .subscribe(products => console.log(products));
//  }

  getContractDetail(idContact, idContract) {
    this.http.get('/api/products/' + idContact + '/' + idContract).subscribe(data => {
      this.contract = data;
      console.log(this.contract);
    });
  }

}
