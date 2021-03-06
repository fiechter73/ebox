import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact = {};
  idContact: string;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContactDetail(this.idContact);
  }

  getContactDetail(id) {
    this.http.get('/api/contacts/' + id).subscribe(data => {
      this.contact = data;
    });
  }

  deleteContact(id) {
    this.http.delete('/api/contacts/' + id)
      .subscribe(res => {
          this.router.navigate(['/contact']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
