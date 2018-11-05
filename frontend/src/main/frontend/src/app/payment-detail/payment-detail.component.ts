import { Component, OnInit } from '@angular/core';
import {Payment} from "../data/payment";

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {
  payment: Payment = {
    amount: 15,
    idPayment: 1,
    income: true,
    paymentTime: '15:30'
  }

  constructor() { }

  ngOnInit() {
  }

}
