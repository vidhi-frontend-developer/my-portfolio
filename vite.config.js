import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/',
  server: {
    port: 3000,
  },
  plugins: [react()],
});