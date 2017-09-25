import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {APIService} from '../_core/api-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  donation: Donation = {
       details: ['null'],
       totalAmount:0,
  };
  constructor(public api: APIService) {
    this.api = api;
  }
  ngOnInit() {
     this.getDonationDetails();
  }
  getDonationDetails(){
     this.api.getDonationDetails().subscribe(data => {
     this.donation.details = data;
     var sum = 0;
     for(var i=0;i<data.length;i++){
       sum = sum + Number(data[i].amount);
     }
     this.donation.totalAmount = sum;
     });
}
}

export class Donation {
    details:['null'];
    totalAmount:number;
}
