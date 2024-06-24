import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config() // Load .env file

export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(import.meta.env.VITE_PORT) || 3000, // Use the VITE_PORT environment variable
  },
  build: {
    outDir: 'dist',
  },
});
