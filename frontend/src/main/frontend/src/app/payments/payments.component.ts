import { Component, OnInit } from '@angular/core';
import {PAYMENTS} from "../mock/mock-payments";
import {Payment} from "../data/payment";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payments = PAYMENTS;
  selectedPayment : Payment;

  constructor() { }

  ngOnInit() {
  }

  onSelect(payment:Payment):void {
    this.selectedPayment = payment;
  }


}
