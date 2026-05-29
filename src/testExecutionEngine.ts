// src/testExecutionEngine.ts
import { privateKeyToAccount } from "viem/accounts";
import { ExecutionEngine } from "./exchange/engine/ExecutionEngine.js";
import { marketState } from "./state/marketState.js";

marketState.BTC.currPrice = 75000;

const wallet = privateKeyToAccount(process.env.HL_PRIVATE_KEY as `0x${string}`);

const engine = new ExecutionEngine(wallet);

const order = await engine.placeOrder({
  symbol: "BTC",
  side: "BUY",
  size: 0.001,
});

console.log(order);

