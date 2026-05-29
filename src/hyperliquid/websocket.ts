import WebSocket from "ws";
import { marketState } from "../state/marketState.js";
import type { HyperLiquidMessage } from "../dtos/Types.js";


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
    const parsed : HyperLiquidMessage = JSON.parse(data.toString());

    if (parsed.channel !== "trades" || !Array.isArray(parsed.data)) {
        console.log(parsed);
        return;
    }

    const latestTrade = parsed.data.at(-1);
    if (!latestTrade) {
        return;
    }

    marketState.BTC.currPrice = Number(latestTrade.px);
    console.log("BTC trade:", latestTrade);
    console.log("Current BTC price:", marketState.BTC.currPrice);
});

ws.on("close", () => {
    console.log("Disconnected");
});

ws.on("error", (err) => {
    console.error(err);
});
