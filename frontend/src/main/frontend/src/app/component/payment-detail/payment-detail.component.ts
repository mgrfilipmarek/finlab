import {Component, Input, OnInit} from '@angular/core';
import {Payment} from "../../data/payment";

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  @Input() childPayment: Payment;

  constructor() { }

  ngOnInit() {
  }

  hideDetail():void {
    this.childPayment = null;
  }

}
