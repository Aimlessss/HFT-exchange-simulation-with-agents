import { marketState } from "../../state/marketState.js";
import { BaseExchange } from "../base/BaseExchange.js";
import { Order } from "../model/Order.js";
import { Position } from "../model/Position.js";
import {HttpTransport, ExchangeClient, InfoClient} from "@nktkas/hyperliquid";
export class ExecutionEngine extends BaseExchange {
    private transport: HttpTransport;
    private exchangeClient: ExchangeClient;
    private infoClient: InfoClient;
    constructor(wallet : any){
        super();
        this.transport = new HttpTransport();
        this.exchangeClient = new ExchangeClient({
            transport : this.transport,
            wallet
        });
        this.infoClient = new InfoClient({
            transport : this.transport
        })
    }

  async placeOrder(order: Order): Promise<any> {
        const currentPrice = marketState.BTC.currPrice;
        const executionPrice =
        order.side === "BUY"
            ? currentPrice * 1.01
            : currentPrice * 0.99;
        const placeOrder = await this.exchangeClient.order({
        orders: [{
            a: 0,
            b: order.side === "BUY",
            p: executionPrice.toString(),
            s: order.size.toString(),
            r: false,
            t: { limit: { tif: "Ioc" } },
        }],
            grouping: "na",
        });
        return placeOrder;
  }

  async getPosition(): Promise<Position[]> {
    throw new Error("not implemented yet");
  }

  async getBalance(): Promise<number> {
    throw new Error("not implemented yet");
  }
    cancOrder(): Promise<number> {
        throw new Error("Method not implemented.");
    }
}
