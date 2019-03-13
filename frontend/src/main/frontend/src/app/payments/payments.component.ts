import { Component, OnInit } from '@angular/core';
import {Account} from "../data/account";
import {AccountService} from "../services/account.service";
import {Enumeration} from "../data/enumeration";
import {EnumerationService} from "../services/enumeration.service";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  model : Account = new Account();
  types:Enumeration[];

  constructor(private accountService: AccountService, private enumerationService:EnumerationService) { }

  getTypes(): void {
    this.enumerationService.getEnumerationAll(1)
      .subscribe(types => this.types = types)
  }

  ngOnInit() {
    this.getTypes();
  }

  onSubmit() {
    console.log(this.model);

    this.accountService.addAccount(this.model)
      .subscribe((result:boolean) => {
        console.log(result)
      });
  }


}
