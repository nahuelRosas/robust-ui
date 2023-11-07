import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { defineConfig } from "tsup";

async function removeDirective(fileName: string) {
  const filePath = path.resolve(__dirname, "dist", fileName);

  try {
    await access(filePath);
    let fileContents = await readFile(filePath, "utf-8");

    fileContents = fileContents.replace(/'use client'\n/g, "");

    await writeFile(filePath, fileContents);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error while processing ${fileName}: ${error.message}`);
    } else {
      console.error(`Unknown error while processing ${fileName}`);
    }
  }
}

export default defineConfig({
  format: ["cjs", "esm"],
  target: "es2022",
  sourcemap: true,
  banner: {
    js: "'use client'",
  },
  minify: "terser",
  external: ["react"],
  terserOptions: {
    compress: true,
  },
  async onSuccess() {
    try {
      await Promise.all([
        removeDirective("index.mjs"),
        removeDirective("index.js"),
      ]);
    } catch (error) {
      console.error("Error during onSuccess:", error);
    }
  },
});
