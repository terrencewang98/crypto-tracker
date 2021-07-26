import { AppModule } from '../../app.module'
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrencyDisplayComponent } from '../currency-display.component';
import { Coin, GraphMetrics } from '../../interfaces';
import { CurrencyService } from '../../currency.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-currency-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnChanges {
  @Input() selected: string[] = [];
  view: string = "day";
  labels: Label[][] = [];
  data: ChartDataSets[][] = [];
  options: ChartOptions = {responsive: true, maintainAspectRatio: false};

  constructor(private currencyService: CurrencyService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.selected = changes.selected.currentValue;
    this.getData();
  }

  setView(view: string): void {
    this.view = view;
    this.getData();
    console.log(this.labels);
  }

  getData(): void {
    this.labels = [];
    this.data = [];
    if(this.view == "day"){
      this.getDay(this.selected);
    }
    else if(this.view == "week"){
      this.getWeek(this.selected);
    }
    else if(this.view == "month"){
      this.getMonth(this.selected);
    }
  }

  getDay(symbols: string[]): void {
    this.currencyService.getDayGraphMetrics(symbols).subscribe(metrics => {
      metrics.forEach(m => {
        let mLabels: Label[] = [];
        let mData: number[] = [];
        m.timeSeries.forEach(item => {
          let date = new Date(item.time * 1000)
          let x = date.getHours() == 0 ? "00:00" : date.getHours() + ":00";
          let y = item.open;
          mLabels.push(x);
          mData.push(y);
        })
        this.labels.push(mLabels);
        this.data.push([
          { data: mData, label: "Hourly Price of " + m.symbol }
        ]);
      })
    })
  }

  getWeek(symbols: string[]): void {
    this.currencyService.getWeekGraphMetrics(symbols).subscribe(metrics => {
      metrics.forEach(m => {
        let mLabels: Label[] = [];
        let mData: number[] = [];
        m.timeSeries.forEach(item => {
          let date = new Date(item.time * 1000);
          let x = (date.getMonth() + 1) + "/" + date.getDate();
          let y = item.open;
          mLabels.push(x);
          mData.push(y);
        })
        this.labels.push(mLabels);
        this.data.push([
          { data: mData, label: "Daily Price of " + m.symbol }
        ]);
      })
    });
  }

  getMonth(symbols: string[]): void {
    this.currencyService.getMonthGraphMetrics(symbols).subscribe(metrics => {
      metrics.forEach(m => {
        let mLabels: Label[] = [];
        let mData: number[] = [];
        m.timeSeries.forEach(item => {
          let date = new Date(item.time * 1000);
          let x = (date.getMonth() + 1) + "/" + date.getDate();
          let y = item.open;
          mLabels.push(x);
          mData.push(y);
        })
        this.labels.push(mLabels);
        this.data.push([
          { data: mData, label: "Daily Price of " + m.symbol }
        ]);
      })
    });
  }


}
