import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    supportFile: false,
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
  e2e: {
    baseUrl: "http://127.0.0.1:5173",
    specPattern: "tests/e2e/specs/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
    screenshotsFolder: "tests/e2e/screenshots",
    videosFolder: "tests/e2e/videos",
  },
});
