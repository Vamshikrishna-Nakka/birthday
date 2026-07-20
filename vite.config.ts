import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Repo name must match GitHub Pages path: /birthday/
export default defineConfig({
  plugins: [react()],
  base: "/birthday/",
});
