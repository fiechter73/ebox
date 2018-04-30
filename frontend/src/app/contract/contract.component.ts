import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contracts: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/contracts').subscribe(data => {
      this.contracts = data; 
    });
  }

}
