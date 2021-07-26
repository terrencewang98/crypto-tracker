import { AppModule } from '../../app.module'
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrencyDisplayComponent } from '../currency-display.component';
import { Coin, TableMetrics } from '../../interfaces';
import { CurrencyService } from '../../currency.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnChanges {
  @Input() selected: string[] = [];
  metrics: TableMetrics[] = [];
  columnsToDisplay = ['symbol', 'name', 'price', 'price_btc', 'percent_change_24h', 'percent_change_7d', 'percent_change_30d', 'market_cap', 'max_supply'];

  constructor(private currencyService: CurrencyService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.selected = changes.selected.currentValue;
    this.getTableMetrics(this.selected);
  }

  getTableMetrics(symbols: string[]): void {
    if(symbols.length < 1){
      this.metrics = [];
    }
    else{
      this.currencyService.getTableMetrics(symbols).subscribe(metrics => {
        this.metrics = metrics;
      });
    }
  }

}
