import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  displayedColumns = ['anrede', 'name', 'city', 'phone', 'email', 'contactdetails', 'contractdetails'];
  dataSource: any;
  dataSource = ELEMENT_DATA;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/contacts').subscribe(data => {
    this.dataSource = data;
    });
  }
}
export interface UserList {
  anrede: string;
  name: string;
  city: string;
  phone: string;
  email: string;
  contactdetailsid: string;
  contractdetailsid: string;
}

const ELEMENT_DATA: UserList[] = [
  {anrede: 'Herr', name: 'Juerg Fiechter', city: 'Küttigkofen', phone: '+41794444444', email: 'juerg.fiechter@inftec.ch',
  contactdetailsid: '1', contractdetailsid: '1'},
  {anrede: 'Herr', name: 'Peter Eggenschwiler', city: 'Lüterkofen', phone: '+41794444442', email: 'peter.eggenschwiler@inftec.ch',
   contactdetailsid: '2', contractdetailsid: '2'},
  {anrede: 'Herr', name: 'Martin Meyer', city: 'Küttigkofen', phone: '+41794444242', email: 'martin.meyer@inftec.ch',
   contactdetailsid: '3', contractdetailsid: '4'}
];
