import { Component, OnInit } from '@angular/core';
import { ResponseObject, Coin, CoinMetrics } from './interfaces';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.css']
})
export class CurrenciesListComponent implements OnInit {

  coins: Coin[];
  filtered: Coin[];
  metrics: CoinMetrics[];
  columnsToDisplay = ['symbol', 'name', 'price', 'percent_change_24h', 'percent_change_7d', 'percent_change_30d', 'market_cap', 'max_supply'];

  constructor(private currencyService: CurrencyService) {
    this.coins = [];
    this.filtered = [];
    this.metrics = [];
  }

  ngOnInit(): void {
    this.currencyService.getCoins().subscribe(coins => {
      this.coins = coins;
      this.filtered = coins;
    });
  }

  getSelectedMetrics(symbols: string[]): void {
    if(symbols.length < 1){
      this.metrics = [];
    }
    else{
      this.currencyService.getCoinMetrics(symbols).subscribe(metrics => {
        this.metrics = metrics;
      });
    }
  }

}
