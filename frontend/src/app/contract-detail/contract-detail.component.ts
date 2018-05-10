import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {

  idContract: string;
  contract: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    // snapshot.params['idContract']
    this.getContractDetail(this.route.snapshot.queryParams['idContract']);
    this.idContract = this.route.snapshot.queryParams['idContact'];
    console.log(this.idContract);
    console.log(this.contract);

  }

  getContractDetail(idContract) {
    this.http.get('/contracts/' + idContract).subscribe(data => {
      this.contract = data;
      console.log(data.toString);
    });
  }

  deleteContract(idContract) {
    this.http.delete('/contracts/' + idContract)
      .subscribe(res => {
        this.router.navigate(['/contract', this.idContract ]);
      }, (err) => {
      console.log(err);
      }
    );
  }
}
