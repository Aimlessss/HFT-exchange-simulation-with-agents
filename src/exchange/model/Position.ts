export interface Position {
   symbol: string;

   size: number;

   entryPrice: number;

   unrealizedPnl: number;

   side: "LONG" | "SHORT";
}