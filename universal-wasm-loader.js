/**
 * A universal Wasm loader that mimics ESM import behavior.
 * Works in: Node.js (18+), Bun, Deno, and all modern Browsers.
 * 
 * @param {string | URL} wasmPath - The path or URL to the .wasm file.
 * @param {WebAssembly.Imports} [importObject={}] - Optional imports for the Wasm instance.
 * @returns {Promise<WebAssembly.Exports>} The exported members of the WebAssembly instance.
 * 
 * @example
 * const { add } = await wasmImport("./math.wasm");
 */
export async function wasmImport(wasmPath, importObject = {}) {
  // 1. Resolve path relative to the module calling this function
  const url = new URL(wasmPath, import.meta.url);

  let instance;

  // 2. Use 'instantiateStreaming' for best performance (standard for Browsers/Deno/Bun)
  if (typeof WebAssembly.instantiateStreaming === "function") {
    try {
      const response = await fetch(url);
      ({ instance } = await WebAssembly.instantiateStreaming(response, importObject));
    } catch (e) {
      // Fallback for environments where fetch/streaming might fail (some Node setups)
      const bytes = await (await fetch(url)).arrayBuffer();
      ({ instance } = await WebAssembly.instantiate(bytes, importObject));
    }
  } else {
    // Legacy fallback
    const bytes = await (await fetch(url)).arrayBuffer();
    ({ instance } = await WebAssembly.instantiate(bytes, importObject));
  }

  return instance.exports;
}