import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {

  boxtypen = [
    {value: 'Basisbox', viewValue: 'Basisbox'},
    {value: 'EcoBox', viewValue: 'EcoBox'},
    {value: 'Premium EcoBox', viewValue: 'PremiumEcoBox'}
  ];

  contract = {};
  idContact: string;
  idContract: string;

  type: string;
  boxNr: string;
  buildingInfo: string;
  contractStartDate: Date;
  contractEndDate: Date;


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idContract = this.route.snapshot.queryParams['idContract'];
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContract(this.idContact, this.idContract );
  }

  getContract(idContact, idContract) {
    this.http.get('/api/contractofcontacts/' + idContact + '/' + idContract).pipe(
      map(res => {
        this.contract['boxNr'] = res['boxNr'];
        this.contract['type'] = res['type'];
        this.contract['buildingInfo'] = res['buildingInfo'];
        this.contract['contractStartDate'] = new Date(res['contractStartDate']);
        this.contract['contractEndDate']  = new Date (res['contractEndDate']);
        return this.contract;
      })
    )
    .subscribe(contract => {
      console.log(contract);
    });
  }

  updateContract(idcontact, data) {
    console.log('Data:  ' + data.toString());
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
