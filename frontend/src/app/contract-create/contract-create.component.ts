import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contract = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveContract() {
    this.http.post('/contracts', this.contract)
      .subscribe(res => {
        this.router.navigate(['/contract', res]);
      }, (err)=> {
        console.log(err);
      }
    );
  }
}
