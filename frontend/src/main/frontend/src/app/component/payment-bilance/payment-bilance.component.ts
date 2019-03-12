import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Payment} from "../../data/payment";
import {PaymentService} from "../../services/payment.service";

@Component({
  selector: 'app-payment-bilance',
  templateUrl: './payment-bilance.component.html',
  styleUrls: ['./payment-bilance.component.css']
})
export class PaymentBilanceComponent implements OnInit {

  payments : Payment[];
  selectedPayment: Payment;

  constructor(private paymentService:PaymentService) { }

  @Output() paymentDetailEvent = new EventEmitter<Payment>();

  getPayments(): void {
    this.paymentService.getPayments()
      .subscribe(payments => this.payments = payments)
  }

  ngOnInit() {
    this.getPayments();
  }

  showDetail(payment: Payment):void {
    this.selectedPayment = payment;
    this.paymentDetailEvent.emit(payment);
  }

}
