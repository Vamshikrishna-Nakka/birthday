import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dev: serve at / so localhost:5173 works.
// Build: /birthday/ for GitHub Pages.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/birthday/" : "/",
  server: {
    // OneDrive locks files and can crash Vite's native watcher (EBUSY).
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
}));
