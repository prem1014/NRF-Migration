import {Component, OnInit} from '@angular/core';
import {APIService} from '../_core/api-service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
})

export class DonateComponent implements OnInit {
  donation: Donation = {
    amount: undefined,
    name: '',
    email: '',
    donatedDate: '',
    mobileNo: '',
    donarDob: '',
    pan: '',
    pinCode: '',
    countryCode: '',
    stateCode: '',
    districtCode: '',
    paymentStatus:false,
    paymentId:''

  };

  location: Location = {
    country: ['null'],
    state: ['null'],
    district: ['null'],
  };

  constructor(public api: APIService) {
    this.api = api;
  }

  ngOnInit() {
    this.getCountry();
  }

  saveData(donation): void {
     donation.paymentId = 'TRN'+Math.floor((Math.random() * 100000000) + 1);
     donation.paymentStatus = false;
     this.api.saveDonorDetails(donation).subscribe(data => alert(data.message))
  }

  onCountryChange(countryCode: string): void {
    this.api.getState(countryCode).subscribe(data => this.location.state = data);
  }

  onStateChange(stateCode: string): void {
    this.api.getDistrict(stateCode).subscribe(data => this.location.district = data);
  }

  getCountry() {

    this.api.getCountry().subscribe(data => this.location.country = data);
  }
}

export class Donation {
  amount: number;
  name: string;
  email: string;
  donatedDate: string;
  mobileNo: string;
  donarDob: string;
  pan: string;
  pinCode: string;
  countryCode: string;
  stateCode: string;
  districtCode: string;
  paymentId:string;
  paymentStatus:boolean;
}
export class Location {
  country: ['null'];
  state: ['null'];
  district: ['null'];
}
