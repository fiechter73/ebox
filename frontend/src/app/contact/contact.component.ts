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
  contact: any;


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/contacts').subscribe(data => {
      this.contact = data;
      console.log(this.contact);
    });
  }
}
