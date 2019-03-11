import { Component, OnInit } from '@angular/core';
import {Payment} from "../../data/payment";

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  payment: Payment;

  constructor() { }

  ngOnInit() {
    this.payment = null;
  }

}
