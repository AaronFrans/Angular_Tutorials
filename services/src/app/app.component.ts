import { Component, OnInit } from "@angular/core";
import { AccountService } from "./account.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountService: AccountService) {}

  onAccountAdded(newAccount: { name: string; status: string }) {}

  onStatusChanged(updateInfo: { id: number; newStatus: string }) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
