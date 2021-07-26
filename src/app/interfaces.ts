export interface ResponseObject{
  config: {};
  usage: {};
  data: [];
}

export interface Coin{
  name: string;
  symbol: string;
}

export interface TableMetrics {
  name: string;
  symbol: string;
  price: number;
  price_btc: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  market_cap: number;
  max_supply: number;
}

export interface GraphMetrics {
  name: string;
  symbol: string;
  timeSeries: [
    {
      time: number,
      open: number,
    }
  ];
}
