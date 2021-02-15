import { Component, OnDestroy, OnInit } from "@angular/core";

import { interval, Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  sub: Subscription;

  ngOnInit() {
    //this.sub = interval(1000).subscribe((count) => {
    //  console.log(count);
    //});

    const customObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("Count is greater 3!!!"));
        }
        count++;
      }, 1000);
    });

    this.sub = customObservable
      .pipe(
        map((data) => {
          return "Round: " + (+data + 1);
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log("complete");
        }
      );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
