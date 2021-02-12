import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap-styling-tutorial';
  username: string = "Please input your username"

  isEmpty () {
    return this.username.length === 0;
  }

  onResetUsername(){
    this.username = ``
  }
}
