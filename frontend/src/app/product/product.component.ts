import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductCatalogue} from '../product.catalouge';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { reduce } from 'rxjs/operators';
import { element } from 'protractor';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns = ['name', 'description', 'imageUrl', 'quanitity', 'price', 'productDetails'];

  contract = {};
  idContact:  string;
  idContract: string;
  idProduct:  string;
  preise = [];
  calcPrice: string;
  calcMwst:  number;


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.idContract = this.route.snapshot.queryParams['idContract'];
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContractDetail(this.idContact, this.idContract);
    this.calcSum();
  }

  getContractDetail(idContact, idContract) {
    this.http.get('/api/products/' + idContact + '/' + idContract).subscribe(data => {
      this.contract = data;
      console.log(this.contract);
    });
  }

  deleteProduct(idContact, idContract, idProduct, product ) {
    console.log('DeleteProduct');
    this.http.put('/api/productdel/' + idContact + '/' + idContract + '/' + idProduct , product )
      .subscribe(res => {
        this.router.navigate(['/product'], {queryParams: {idContract: this.idContract, idContact: this.idContact }});
      }, (err) => {
      console.log(err);
      }
    );
  }
  calcSum() {
    this.http.get('/api/products/' + this.idContact + '/' + this.idContract).pipe(
      map(res => {
        return res['products'];
      })
    )
    .subscribe(products => {
      if (products.length > 0) {
      // tslint:disable-next-line:no-shadowed-variable
        products.forEach(element => {
          this.preise.push(element.price);
        });
        const sum = this.preise.reduce((acc, val) => acc + val);
        const mwst = Math.round(sum * 7.7 / 100 * 20) / 20;
      //  ROUND(SUM(ABOVE)*7.7/100*20;0)/20
        this.calcMwst = mwst;
        this.calcPrice =  sum + mwst;
      } else {
        this.calcPrice = '';
      }
    });
  }
}
