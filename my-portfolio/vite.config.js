import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copy } from 'vite-plugin-copy';

// Make sure this matches your repository name EXACTLY
const repoName = '/PORTFOLIO-WEBSITE/'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy([
      { src: 'public/404.html', dest: 'dist' } 
    ])
  ],
  // ✅ DOUBLE-CHECK THIS LINE
  base: repoName, 
  build: {
    outDir: 'dist', 
  }
})