export interface ResponseObject{
  config: {};
  usage: {};
  data: [];
}

export interface Coin{
  name: string;
  symbol: string;
}

export interface CoinMetrics {
  name: string;
  symbol: string;
  price: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  market_cap: number;
  max_supply: number;
}
