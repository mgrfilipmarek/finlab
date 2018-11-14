import { Component, OnInit } from '@angular/core';
import {Chart} from "angular-highcharts";

@Component({
  selector: 'app-total-bilance',
  templateUrl: './total-bilance.component.html',
  styleUrls: ['./total-bilance.component.css']
})
export class TotalBilanceComponent implements OnInit {

  chart = new Chart({

    chart: {
      type: 'pie'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Browser shares 2017'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black'
            }
          }
      }
    },
    series: [{
      type: 'pie',
      innerSize: '60%',
      data: [
        ['Chrome', 8.9]
      ]
    }]

});
  constructor() { }

  ngOnInit() {
  }

}
