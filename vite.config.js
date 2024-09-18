import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
      proxy: {
        '/api': {
          target: 'https://fullstack-crud-app-2vyb.onrender.com',
          changeOrigin: true,
          secure: false,
        },
      },
    },
    plugins: [react()],
  });
  
