import {Component, OnDestroy, OnInit} from '@angular/core';
import {Chart} from "angular-highcharts";
import {AccountService} from "../../services/account.service";
import {Account} from "../../data/account";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-total-bilance',
  templateUrl: './total-bilance.component.html',
  styleUrls: ['./total-bilance.component.css']
})
export class TotalBilanceComponent implements OnInit, OnDestroy {

  accountSubscription: Subscription;
  chart : Chart;

  constructor(private accountService:AccountService) {
  }

  ngOnInit() {
    this.accountSubscription = this.accountService.getAccountAll()
      .subscribe((data: Account[]) => {
        this.initGraph(data);
      });
  }

  ngOnDestroy() {
    this.accountSubscription.unsubscribe();
  }

  initGraph(data: Account[]):void {
    let chartData = [];
    // data.forEach((value) =>
      //   chartData.push([value.description + " (" + value.type.value + ")", value.amount]));

    chartData = data.map(value => [
      value.description + " (" + value.type.value + ")",
      value.amount
    ]);
    // chartData = data.map(value => [value.description + " (" + value.type.value + ")", value.amount]);

    this.chart = this.accountService.totalBilanceChart(chartData);
  }

}
