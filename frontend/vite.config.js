import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: "src/css/quasar-variables.scss"
    })
  ],
  css: {
    postcss: "./postcss.config.js"
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3300",
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  },
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}`,
      pages: `${path.resolve(__dirname, "src")}/pages`,
      components: `${path.resolve(__dirname, "src")}/components`
    }
  }
});
