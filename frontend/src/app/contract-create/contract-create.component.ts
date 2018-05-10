import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contact: {};
  contract: {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }


  ngOnInit() {
    this.getContactDetail(this.route.snapshot.params['id']);
  }

  saveContract() {
    this.http.post('/contracts', this.contract)
      .subscribe(res => {
        this.router.navigate(['/contract', res]);
      }, (err) => {
        console.log(err);
      }
    );
  }

  addContract(id, data) {
    this.http.post('/contacts/' + id, data)
      .subscribe(res => {
        id = res['id'];
        this.router.navigate(['/contract', id]);
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
