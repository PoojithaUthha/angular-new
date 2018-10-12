import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-new';
  tabNames = [
    { nameToShow: "Billing", payloadName: "billing"},
    { nameToShow: "Account", payloadName: "account"},
    { nameToShow: "MRC", payloadName: "mrc"},
    { nameToShow: "Credit & EIP", payloadName: "credit"}]
}
