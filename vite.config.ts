/*
 * @Author             : Felix
 * @Email              : 307253927@qq.com
 * @Date               : 2023-04-25 17:52:00
 * @LastEditors        : Felix
 * @LastEditTime       : 2023-05-17 12:42:21
 */

// @ts-nocheck
import { defineConfig } from "vite";
import dts from 'vite-plugin-dts'
import path from "path";
import pkg from "./package.json";

export default () => {
  console.log(`\n\t版本：\x1B[32m${pkg.version}\x1B[39m\n`);

  return defineConfig({
    plugins: [
      dts(),
    ],
    resolve: {
      alias: {
        "@": path.join(__dirname, "src"),
      },
    },
    build: {
      lib: {
        entry: "src/auto-resize.ts",
        name: "auto-resize",
        // formats: ["umd"],
        fileName: (format) => `auto-resize.${format}.js`,
      },
      outDir: "lib",
    },
  });
};
