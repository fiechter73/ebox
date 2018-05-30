import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {

  contract = {};
  idContact: string;
  idContract: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idContract = this.route.snapshot.queryParams['idContract'];
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContract(this.idContact, this.idContract );
    console.log(this.idContact);
    console.log(this.idContract);
  }

  getContract(idContact, idContract ) {
    this.http.get('/api/contractofcontacts/' + idContact + '/' + idContract ).subscribe(data => {
      this.contract = data;
      console.log(data.toString);
    });
  }

  updateContract(idcontact, data) {
    this.http.put('/api/updatecontractsofcontact/' + idcontact, data)
      .subscribe(res => {
        idcontact = res['id'];
        this.router.navigate(['/contract'], {queryParams: {idContract: this.idContract, idContact: this.idContact}});
      }, (err) => {
        console.log(err);
      }
    );
  }
}
