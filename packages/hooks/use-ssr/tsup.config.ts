import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  external: ["react"],
  target: "es2022",
  sourcemap: true,
  minify: "terser",
  terserOptions: {
    compress: true,
  },
  entry: {
    index: "./src/index.ts",
  },
});
