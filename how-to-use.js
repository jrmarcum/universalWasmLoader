import { wasmImport } from "./universal-wasm-loader.js";

// Renaming 'calculate' to 'runMath' and 'version' to 'wasmVer'
const { 
  calculate: runMath, 
  version: wasmVer 
} = await wasmImport("./math.wasm");

console.log(runMath(10, 20)); 
console.log(`Using Wasm Version: ${wasmVer}`);