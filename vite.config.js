import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo name must match the GitHub Pages project-site base path
// (https://<user>.github.io/flowprobe-fresh-20260918/).
export default defineConfig({
  plugins: [react()],
  base: '/flowprobe-fresh-20260918/',
})
