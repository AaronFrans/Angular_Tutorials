import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bootstrap-styling-tutorial';
  showData = false;
  clickedDates = [];

  onChangeDisplay() {
    
    this.clickedDates.push({
      date: this.formatDate(Date.now()),
      index: this.clickedDates.length,
    });
    this.showData = !this.showData;
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
}
