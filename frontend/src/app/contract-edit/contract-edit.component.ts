import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {

  contract = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getContract(this.route.snapshot.params['id']);
  }

  getContract(id) {
    this.http.get('/contracts/'+id).subscribe(data => {
      this.contract = data;
    });
  }
  updateContract(id, data) {
    this.http.put('/contracts/'+id, data)  
      .subscribe(res => {
        let id = res['id'];
        this.router.navigate(['/contract-detail',id]);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
