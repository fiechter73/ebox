import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  contract = {};
  idContact: string;
  idContract: string;
  idProduct: string;


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.idContract = this.route.snapshot.queryParams['idContract'];
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.idProduct = this.route.snapshot.queryParams['idProduct'];
    this.getProductDetails(this.idContact, this.idContract);
  }

  getProductDetails(idContact, idContract) {
    this.http.get('/products/' + idContact + '/' + idContract).subscribe(data => {
      this.contract = data;
    });
  }

}
