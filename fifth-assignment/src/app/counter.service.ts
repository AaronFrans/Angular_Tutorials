import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CounterService {
  counter = 0;

  addToCounter() {
    this.counter++;
    console.log("Count: " + this.counter);
  }
}
