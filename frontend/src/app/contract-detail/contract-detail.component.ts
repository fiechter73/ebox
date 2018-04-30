import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {

  contract = {}

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getContractDetail(this.route.snapshot.params['id']);
  }

  getContractDetail(id) {
    this.http.get('/contracts/'+id).subscribe(data => {
      this.contract = data;
    });
  }

  deleteContract(id) {
    this.http.delete('/contracts/'+id)
      .subscribe(res => {
        this.router.navigate(['/contract']);
      }, (err) => {
      console.log(err);
      }
    );
  }


}
