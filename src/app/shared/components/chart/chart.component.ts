import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() title;
  @Input() data;
  @Input() dataLength: number;
  options: Options;
  chart: Chart;
  constructor() { }

  ngOnInit() {
    this.options = this.getChartOptions(this.data);
    let chart = new Chart(this.options);
    this.chart = chart;
  }

  // highcharts
  getChartOptions(data): any {

    return {
      title: {
        text: this.title
      },
      chart: {
        type: 'pie'
      },
      plotOptions: {
        pie: {
          innerSize: '50%'
        }
      },
      series: [{
        data: data,
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }],
      tooltip: {
        formatter: function() {
          return `<span>${(this.point.name)}: <b>${this.point.y}</b></span>`;
        },
        useHTML: true
      },
      legend: {
        labelFormatter: function() {
          return `${(this.name)} (${this.y})`;
          // return `${this.name} (${this.y})`;
        },
      },
      credits: {
        enabled: false
      },
      noData: {
        style: {
          fontSize: '24px',
          color: '#202030'
        }
      }
    };
  }
}
