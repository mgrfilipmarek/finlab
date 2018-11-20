import { Component, OnInit } from '@angular/core';
import {Payment} from "../data/payment";
import {PaymentService} from "../services/payment.service";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payments : Payment[];
  selectedPayment : Payment;

  constructor(private paymentService:PaymentService) { }

  getPayments(): void {
    this.paymentService.getPayments()
      .subscribe(payments => this.payments = payments)
  }

  ngOnInit() {
    this.getPayments();
  }

  onSelect(payment:Payment):void {
    this.selectedPayment = payment;
  }


}
