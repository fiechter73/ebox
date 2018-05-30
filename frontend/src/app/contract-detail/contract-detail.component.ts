import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {

  idContact: string;
  idContract: string;
  contract = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.idContract = this.route.snapshot.queryParams['idContract'];
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContractDetail(this.idContact, this.idContract);
  }

  getContractDetail(idContact, idContract ) {
    this.http.get('/api/contractofcontacts/' + idContact + '/' + idContract ).subscribe(data => {
      this.contract = data;
      console.log(data.toString);
    });
  }

  deleteContract(idContact, idContract, contract ) {
    this.http.put('/contractofcontactsdel/' + idContact + '/' + idContract, contract )
      .subscribe(res => {
        this.router.navigate(['/contract'], {queryParams: {idContract: this.idContract, idContact: this.idContact}});
      }, (err) => {
      console.log(err);
      }
    );
  }
}
