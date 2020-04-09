import { Component } from '@angular/core';
import {app_service} from "../services/app_services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:any = {};
  constructor() {
    app_service.getAPIResponse()
    .then((response) => this.data = response);   
  }
}
