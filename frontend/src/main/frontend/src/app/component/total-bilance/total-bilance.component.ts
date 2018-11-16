import { Component, OnInit } from '@angular/core';
import {Chart} from "angular-highcharts";
import {AccountService} from "../../services/account.service";
import {Account} from "../../data/account";

@Component({
  selector: 'app-total-bilance',
  templateUrl: './total-bilance.component.html',
  styleUrls: ['./total-bilance.component.css']
})
export class TotalBilanceComponent implements OnInit {
  accounts : Account[];
   // accounts : Account[] =
  //    //  [
  //    //    {idAccount: 2, description: "rezerva", amount: 15, type: null},
  //    //    {idAccount: 2, description: "SLSP", amount: 10, type: null}
  //    //  ];
  // chartData = [["asd",123], ["ewe", 14]];
  chart : Chart;

  constructor(private accountService:AccountService) {
  }

  ngOnInit() {
    var chartData = [];
    this.accountService.getAccountAll()
      .subscribe((data: Account[]) => {
        this.accounts = data,
        // console.log(data);
        this.accounts.forEach((value) =>
            chartData.push([value.description + " (" + value.type.value + ")", value.amount])),
          this.chart = new Chart({
            chart: {
              type: 'pie'
            },
            credits: {
              enabled: false
            },
            title: {
              text: '2018'
            },
            tooltip: {
              pointFormat: '<b>{point.y}€</b> ({point.percentage:.1f}%)'
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                  enabled: false
                },
                showInLegend: true
              }
            },
            series: [{
              type: 'pie',
              name: 'Podiel',
              innerSize: '60%',
              data: chartData
            }]

          });
      });
  }
}
