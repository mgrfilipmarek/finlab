import {Component, OnDestroy, OnInit} from '@angular/core';
import {Chart} from "angular-highcharts";
import {AccountService} from "../../services/account.service";
import {Account} from "../../data/account";
import {from, fromEvent, interval, of, Subscription} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-total-bilance',
  templateUrl: './total-bilance.component.html',
  styleUrls: ['./total-bilance.component.css']
})
export class TotalBilanceComponent implements OnInit, OnDestroy {
  // secondsCounter = interval(1000);
  accountSubscription: Subscription;
  chart : Chart;

  squareOdd = of(1, 2, 3, 4, 5)
    .pipe(
      filter(n => n % 2 !== 0),
      map(n => n * n)
    );


  constructor(private accountService:AccountService) {
  }

  ngOnInit() {
    this.accountSubscription = this.accountService.getAccountAll()
      .subscribe((data: Account[]) => {
        this.initGraph(data);
      });

    this.squareOdd.subscribe(n => console.log(n));
    // this.secondsCounter.subscribe(n => console.log(n));
  }

  ngOnDestroy() {
    this.accountSubscription.unsubscribe();
  }

  initGraph(data: Account[]):void {
    let chartData = data.map(value => [
      value.description + " (" + value.type.value + ")",
      value.amount
    ]);

    this.chart = this.accountService.totalBilanceChart(chartData);
  }

}
