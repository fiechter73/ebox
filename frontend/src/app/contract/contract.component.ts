import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contact = {};

  contracts: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getContactDetail(this.route.snapshot.params['id']);
    this.http.get('/contracts/' + this.route.snapshot.params['id']).subscribe(data => {
      this.contracts = data;
    });
  }

  getContactDetail(id) {
    this.http.get('/contacts/' + id).subscribe(data => {
      this.contact = data;
    });
  }

}
