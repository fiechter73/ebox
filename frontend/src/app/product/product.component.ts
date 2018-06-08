import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductCatalogue} from '../product.catalouge';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns = ['name', 'description', 'imageUrl', 'quanitity', 'price', 'productDetails'];
  contract = {};
 // contract = [new ProductCatalogue(1, 'Basisbox', '/assets/images/products/black-hat.jpg', ['7.45 x 3.5 x 2.5'], 1, 360.00)];

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
      console.log('Daten ' + this.contract.products);
    });
  }

}
