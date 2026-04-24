export declare function wasmImport(
  wasmPath: string | URL,
  importObject?: WebAssembly.Imports,
): Promise<WebAssembly.Exports>;
