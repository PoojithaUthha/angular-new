import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tabNames = [
    { nameToShow: "Billing", payloadName: "billing"},
    { nameToShow: "Account", payloadName: "account"},
    { nameToShow: "MRC", payloadName: "mrc"},
    { nameToShow: "Credit & EIP", payloadName: "credit"}];

  constructor() { }

  ngOnInit() {
  }

}
