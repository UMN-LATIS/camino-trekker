import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
  ],
  resolve: {
    ...(mode === "production" && {
      alias: {
        "vue-types": "vue-types/shim",
      },
    }),
  },
  build: {
    sourcemap: "inline",
  },

  // vueCompilerOptions: {
  //   // a-frame components
  //   isCustomElement: (tag) => tag.startsWith("a-"),
  // },
}));
