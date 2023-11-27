import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/src/actions": path.resolve(__dirname, "src/actions/*"),
      "@/api": path.resolve(__dirname, "src/api/*"),
      "@/images": path.resolve(__dirname, "src/assets/*"),
      "@/components": path.resolve(__dirname, "src/components/*"),
      "@/constants": path.resolve(__dirname, "src/constants/*"),
      "@/contexts": path.resolve(__dirname, "src/contexts/*")
    }
  }
});
