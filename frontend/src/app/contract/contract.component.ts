import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  displayedColumns = ['type', 'boxNr', 'buildingInfo', 'contractStartDate', 'contractEndDate', 'contractDetails', 'addProducts'];
  contact = {};
  idContract: string;
  idContact: string;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.idContract = this.route.snapshot.queryParams['idContract'];
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContactDetail(this.idContact);
    console.log(this.contact);
  }

  getContactDetail(id) {
    this.http.get('/api/contacts/' + id).subscribe(data => {
      this.contact = data;
    });
  }

}
