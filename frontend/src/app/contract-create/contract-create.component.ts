import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contact = {};
  contract = {};
  idContract: string;
  idContact: string;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }


  ngOnInit() {
    this.idContract = this.route.snapshot.queryParams['idContract'];
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContactDetail(this.idContact);
  }

  addContract(id, data) {
    this.http.post('/contacts/' + id, data)
      .subscribe(res => {
        id = res['id'];
        this.router.navigate(['/contract'], {queryParams: {idContract: this.idContract, idContact: this.idContact}});
      }, (err) => {
        console.log(err);
      }
    );
  }

  getContactDetail(id) {
    this.http.get('/contacts/' + id).subscribe(data => {
      this.contact = data;
    });
  }
}
