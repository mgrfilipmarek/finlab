import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../data/account";
import {Chart} from "angular-highcharts";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountUrl = 'http://localhost:8080/finlab/api/account';

  constructor(private http : HttpClient) { }

  getAccountAll(): Observable<Account[]>{
    return this.http.get<Account[]>(this.accountUrl + "/all");
  }

  addAccount(account: Account): Observable<boolean> {
    return this.http.post<boolean>(this.accountUrl, account);
  }

  totalBilanceChart(chartData: any[]): Chart {
    return new Chart({
      chart: {
        type: 'pie'
      },
      credits: {
        enabled: false
      },
      title: {
        text: '2020'
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
  }
}
