import { AppModule } from '../app.module'
import { Component, OnInit } from '@angular/core';
import { Coin } from '../interfaces';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-display',
  templateUrl: './currency-display.component.html',
  styleUrls: ['./currency-display.component.css']
})

export class CurrencyDisplayComponent implements OnInit {
  coins: Coin[] = [];
  filtered: Coin[] = [];
  selected: string[] = [];
  view: string = "table";

  constructor(private currencyService: CurrencyService) {  }

  ngOnInit(): void {
    this.currencyService.getCoins().subscribe(coins => {
      this.coins = coins;
      this.filtered = coins;
    });
  }

  setSelected(selected: string[]): void{
    this.selected = selected;
  }

  setView(view: string): void {
    this.view = view;
  }
}
