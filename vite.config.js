import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/", // IMPORTANT for GitHub Pages
  build: {
    outDir: "dist", // Ensure Vite builds into `dist/`
  },
});
