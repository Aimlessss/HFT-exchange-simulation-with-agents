export type TMarketState = {
    BTC : {
        currPrice : number
    }   
}

export type HyperLiquidTrade = {
    coin: string;
    px: string;
};

export type HyperLiquidMessage =
    | {
        channel: "trades";
        data: HyperLiquidTrade[];
    }
    | {
        channel: string;
        data?: unknown;
    };

export type BalanceType = {
    agentId : string, 
    balance : string
}