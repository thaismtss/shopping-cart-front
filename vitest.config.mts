import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
    alias: {
      "@": path.resolve(__dirname, "."),
    },
    coverage: {
      all: true,
    },
  },
});
