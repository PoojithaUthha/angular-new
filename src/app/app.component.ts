import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-new';
  tabNames = [
    { nameToShow: "Dashboard", payloadName: "dashboard"},
    { nameToShow: "Reference", payloadName: "reference"},
    { nameToShow: "Reconcilation", payloadName: "reconcilation"},
    { nameToShow: "Support", payloadName: "support"}]
}
