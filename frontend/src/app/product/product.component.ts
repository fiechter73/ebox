import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductCatalogue} from '../product.catalouge';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { reduce } from 'rxjs/operators';
import { element } from 'protractor';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns = ['name', 'description', 'imageUrl', 'quanitity', 'price', 'productDetails'];

  prod: any;
  contract = {};
  idContact:  string;
  idContract: string;
  idProduct:  string;
  preise = [];
  calcPrice: string;


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.idContract = this.route.snapshot.queryParams['idContract'];
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContractDetail(this.idContact, this.idContract);
    this.calcSum(this.idContact, this.idContract);
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

  deleteProduct(idContact, idContract, idProduct, product ) {
    this.http.put('/api/contractofcontactsdel/' + idContact + '/' + idContract + '/' + idProduct , product )
      .subscribe(res => {
        this.router.navigate(['/product'], {queryParams: {idContract: this.idContract, idContact: this.idContact }});
      }, (err) => {
      console.log(err);
      }
    );
  }

  calcSum(idContact, idContract) {
    this.http.get('/api/products/' + idContact + '/' + idContract).pipe(
      map(res => {
        return res['products'];
      })
      )
      .subscribe(products => {
        // tslint:disable-next-line:no-shadowed-variable
        products.forEach(element => {
          this.preise.push(element.price);
        });
        const sum = this.preise.reduce((acc, val) => acc + val);
        this.calcPrice = Math.floor(sum / 100 * 7.7) + sum;
      }
    );
  }
}
