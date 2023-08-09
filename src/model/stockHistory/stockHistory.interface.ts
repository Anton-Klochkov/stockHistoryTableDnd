export interface ResponseStockApple {
  change: number;
  changeOverTime: number;
  changePercent: number;
  close: number;
  date: string;
  fClose: number;
  fHigh: number;
  fLow: number;
  fOpen: number;
  fVolume: number;
  high: number;
  id: string;
  key: string;
  label: string;
  low: number;
  marketChangeOverTime: number;
  open: number;
  priceDate: string;
  subkey: string;
  symbol: string;
  uClose: number;
  uHigh: number;
  uLow: number;
  uOpen: number;
  uVolume: number;
  updated: number;
  volume: number;
}

export interface StockSlice {
  stock: ResponseStockApple[];
  loading: boolean;
  error?: string;
}
