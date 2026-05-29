// import WebSocket from "ws";


export class WebSocketHyperLiquid {
    private ws : WebSocket;
    constructor(){
        this.ws = new WebSocket("wss://api.hyperliquid.xyz/ws");
    }

    connect(){
        this.ws.on("open", () =>{
            
        })
    }
}

import WebSocket from "ws";

const ws = new WebSocket("wss://api.hyperliquid.xyz/ws");

ws.on("open", () => {
    console.log("Connected");

    ws.send(JSON.stringify({
        method: "subscribe",
        subscription: {
            type: "trades",
            coin: "BTC"
        }
    }));
});

ws.on("message", (data) => {
    const parsed = JSON.parse(data.toString());

    console.log(parsed);
});