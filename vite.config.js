import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    coverage: {
      reporter: ["lcov", "text"],
      exclude: [
        "node_modules/",
        "dist/",
        "coverage/",
        "src/main.jsx",
        "src/setupTests.js",
        "src/components/BackgroundBlobs.jsx",
        "**/*.test.{js,jsx}",
      ],
    },
  },
});
