import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})

export class DonateComponent implements OnInit {
donation: Donation = {
  amount: 200,
  name: 'Prem Prakash',
  email: 'prem1014prakash@gmail.com'
};
  constructor() { }

  ngOnInit() {
  }
saveData():void{
alert()
}
}

export class Donation {
  amount: number;
  name: string;
  email: string;
}
