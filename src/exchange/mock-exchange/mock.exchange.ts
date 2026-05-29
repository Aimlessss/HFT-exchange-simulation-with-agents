import { getBalance } from "viem/actions";
import { Order } from "../model/Order.js";
import { BalanceType } from "../../dtos/Types.js";

export class MockExchangeTrade {
    constructor(){
        
    }

    async placeOrder(order : Order) : Promise<boolean>{
        if(order.side === 'BUY' && checkBalance()){
            const balance = getBalance();
        }else{

        }
    }

    async getBalance() : Promise<BalanceType>{
        //db operation 
        return null as BalanceType;
    }
}