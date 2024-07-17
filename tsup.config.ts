import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm", "iife"],
  target: ["es2015"],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
});
