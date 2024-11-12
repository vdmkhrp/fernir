import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";
import { dirname } from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import Handlebars from "vite-plugin-handlebars";

const __dirname = dirname(new URL(import.meta.url).pathname);

const getHtmlInputs = () => {
  return fs
    .readdirSync(__dirname)
    .filter((file) => file.endsWith(".html"))
    .reduce((inputs, file) => {
      const key = file.replace(/\.html$/, "");
      inputs[key] = resolve(__dirname, file);
      return inputs;
    }, {});
};

export default defineConfig({
  root: __dirname,
  base: "./",
  build: {
    rollupOptions: {
      input: getHtmlInputs(),
    },
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
  plugins: [
    Handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      helpers: {},
    }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
});
