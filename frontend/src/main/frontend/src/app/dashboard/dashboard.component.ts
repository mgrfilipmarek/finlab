import {Component, OnDestroy, OnInit} from '@angular/core';
import {Payment} from "../data/payment";
import {Chart} from "angular-highcharts";
import {Account} from "../data/account";
import {PaymentService} from "../services/payment.service";
import {Enumeration} from "../data/enumeration";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  selectedPayment : Payment;

  chart : Chart;


  constructor(private paymentService:PaymentService) { }

  ngOnInit() {
    this.paymentService.getPayments()
      .subscribe((data: Payment[]) => {
        this.initGraph(data);

      });
  }

  initGraph(data: Payment[]):void {
    let dataCounted: Map<string, Payment> = new Map();

    data.forEach((value) => {
      if (dataCounted.get(value.category.value) != null) {
        dataCounted.get(value.category.value).amount += value.amount;
      } else {
        dataCounted.set(value.category.value, value);
      }
    });

    let chartData = Array.from(dataCounted.values()).map(value => [
      value.category.value + " (" + value.account.description + ")",
      value.amount
    ]);

    this.chart = this.paymentService.totalPaymentsChart(chartData);
  }

  ngOnDestroy(): void {
    this.selectedPayment = null;
  }

  receiveMessage($event) {
    this.selectedPayment = $event
  }

}
