import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:any = {};
  constructor() {
    fetch("https://api.jsonbin.io/b/5e8d74eb980e481b8aa0c5ca")
        .then((response) => response.json())
        .then((response) => this.data = response);    
  }
}
