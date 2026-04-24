# universalWasmLoader

A lightweight, universal WebAssembly loader for JavaScript, TypeScript, and the Web.

## Installation

Install via [JSR](https://jsr.io/@jrmarcum/universal-wasm-loader):

**npm:**
```sh
npx jsr add @jrmarcum/universal-wasm-loader
```

**Bun:**
```sh
bunx jsr add @jrmarcum/universal-wasm-loader
```

**Deno:**
```sh
deno add jsr:@jrmarcum/universal-wasm-loader
```

**pnpm:**
```sh
pnpm dlx jsr add @jrmarcum/universal-wasm-loader
```

**Yarn:**
```sh
yarn dlx jsr add @jrmarcum/universal-wasm-loader
```

**vlt:**
```sh
vlt install jsr:@jrmarcum/universal-wasm-loader
```

## Usage

```javascript
// Example usage of the universal Wasm loader
import { wasmImport } from "./universal-wasm-loader.js";

try {
  const { calculate: runMath, version: wasmVer } = await wasmImport("./math.wasm");
  
  console.log("Result:", runMath(10, 20)); 
  console.log(`Using Wasm Version: ${wasmVer}`);
} catch (err) {
  console.error("Failed to load Wasm:", err);
}
```

This package is published to JSR with full provenance for enhanced security.
