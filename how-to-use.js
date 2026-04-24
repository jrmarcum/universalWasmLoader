// Example usage of the universal Wasm loader
import { wasmImport } from "./universal-wasm-loader.js";

try {
  const { calculate: runMath, version: wasmVer } = await wasmImport("./math.wasm");
  
  console.log("Result:", runMath(10, 20)); 
  console.log(`Using Wasm Version: ${wasmVer}`);
} catch (err) {
  console.error("Failed to load Wasm:", err);
}