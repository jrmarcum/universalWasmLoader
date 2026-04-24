(module
  ;; Exported function: calculate(a, b) -> (a * b) + 10
  (func $calculate (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.mul
    i32.const 10
    i32.add)
  (export "calculate" (func $calculate))

  ;; Exported global: version (i32)
  (global $version i32 (i32.const 1))
  (export "version" (global $version))
)