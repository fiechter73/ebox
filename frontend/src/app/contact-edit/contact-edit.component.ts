import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contact = {};
  idContact: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContact(this.idContact);
  }

  getContact(idContact) {
    this.http.get('/contacts/' + idContact).subscribe(data => {
      this.contact = data;
    });
  }

  updateContact(id, data) {
    this.http.put('/api/contacts/' + id, data)
      .subscribe(res => {
          // tslint:disable-next-line:no-shadowed-variable
          const id = res['id'];
          this.router.navigate(['/contact-detail'], {queryParams: {idContact: id}});
        }, (err) => {
          console.log(err);
        }
      );
  }
}
