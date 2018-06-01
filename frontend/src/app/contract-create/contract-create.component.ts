import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  boxtypen = [
    {value: 'Basisbox', viewValue: 'Basisbox'},
    {value: 'EcoBox', viewValue: 'EcoBox'},
    {value: 'Premium EcoBox', viewValue: 'PremiumEcoBox'}
  ];

  contact = {};
  contract = {};
  idContract: string;
  idContact: string;

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }


  ngOnInit() {
    this.idContract = this.route.snapshot.queryParams['idContract'];
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContactDetail(this.idContact);
    console.log('IdContact:' + this.idContact);
    console.log('IdContract' + this.idContract);
  }

  addContract(id, data) {
    this.http.post('/api/contacts/' + id, data)
      .subscribe(res => {
        id = res['id'];
        this.router.navigate(['/contract'], {queryParams: {idContract: this.idContract, idContact: this.idContact}});
      }, (err) => {
        console.log(err);
      }
    );
  }

  getContactDetail(id) {
    this.http.get('/api/contacts/' + id).subscribe(data => {
      this.contact = data;
    });
  }
}
