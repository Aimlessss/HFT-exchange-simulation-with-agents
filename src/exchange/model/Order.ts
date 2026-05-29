export type OrderSide = "BUY" | "SELL";

export interface Order {
  symbol: "BTC";
  side: OrderSide;
  size: number;
}