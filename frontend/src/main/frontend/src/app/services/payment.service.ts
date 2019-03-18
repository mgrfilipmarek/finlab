import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Payment } from '../data/payment';
import {MessageService} from "../messages/message.service";
import {Chart} from "angular-highcharts";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentsUrl = 'http://localhost:8080/finlab/api/payment/all';

  constructor(private http : HttpClient,
              private messageService:MessageService) { }

  getPayments(): Observable<Payment[]>{
    // this.messageService.add('HeroService: fetched heroes');
    // return of(PAYMENTS);
    return this.http.get<Payment[]>(this.paymentsUrl);
  }

  totalPaymentsChart(chartData: any[]): Chart {
    return new Chart({
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
  }
}
