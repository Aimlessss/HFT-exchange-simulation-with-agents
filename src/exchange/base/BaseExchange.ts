import { Order } from "../model/Order.js";
import { Position } from "../model/Position.js";

export abstract class BaseExchange {
    abstract placeOrder(order : Order) : Promise<void>;
    
    abstract getPosition() : Promise<Array<Position>>;
    
    abstract getBalance() : Promise<number>;

    abstract cancOrder() : Promise<number>;
}