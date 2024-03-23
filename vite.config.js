import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/BrixeyStaticPage/", // Add this if your repo is like https://github.com/husnainalyy/BrixeyStaticPage
})