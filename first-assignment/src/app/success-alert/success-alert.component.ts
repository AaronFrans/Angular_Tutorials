import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  styles: [
    `
      h1 {
        color: green;
      }
    `,
  ],
  template: ` <h1>This is a success message</h1> `,
})
export class SuccessAlertComponent {}
