import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://poweruptech.app:8080", // URL da sua API
        changeOrigin: true,
        rewrite: (path) => path, // Remove '/api' da URL
      },
    },
  },
});
