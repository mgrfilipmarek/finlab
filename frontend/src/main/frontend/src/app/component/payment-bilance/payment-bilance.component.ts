import { Component, OnInit } from '@angular/core';
import {Payment} from "../../data/payment";
import {PaymentService} from "../../payments/payment.service";

@Component({
  selector: 'app-payment-bilance',
  templateUrl: './payment-bilance.component.html',
  styleUrls: ['./payment-bilance.component.css']
})
export class PaymentBilanceComponent implements OnInit {

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

}
