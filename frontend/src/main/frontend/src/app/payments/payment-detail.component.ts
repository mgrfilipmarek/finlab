import {Component, OnInit, Input} from '@angular/core';
import {Payment} from "../data/payment";

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {
  @Input() payment: Payment;

  constructor() {
  }

  ngOnInit() {
  }

  onDeselect():void {
    this.payment = null;
  }

}
