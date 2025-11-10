import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // ✅ enables describe, test, expect
    environment: "jsdom", // ✅ simulate browser DOM
    setupFiles: "./src/test/setup.js", // ✅ ensures jest-dom loads properly
  },
});
