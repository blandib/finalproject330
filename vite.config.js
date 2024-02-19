import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        Option: resolve(__dirname, "src/option.html"),
        questions: resolve(__dirname, "src/question.html"),
        "scoreboard": resolve(__dirname, "src/scoreboard.html"), // New page
      },
    },
  },
});
/*export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify('v1.0.0'),
    __API_URL__: 'window.__backend_api_url',
  },
})*/