import {Component, OnDestroy, OnInit} from '@angular/core';
import {Payment} from "../data/payment";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  selectedPayment : Payment;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.selectedPayment = null;
  }

  receiveMessage($event) {
    this.selectedPayment = $event
  }

}
