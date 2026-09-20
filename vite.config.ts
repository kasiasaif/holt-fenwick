import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const root = fileURLToPath(new URL('.', import.meta.url))
const routes = ['about', 'sectors', 'projects', 'sustainability', 'careers', 'news', 'contact']

export default defineConfig({
  base: '/holt-fenwick/',
  plugins: [
    react(),
    {
      name: 'spa-github-pages',
      closeBundle() {
        const index = resolve(root, 'dist/index.html')
        copyFileSync(index, resolve(root, 'dist/404.html'))
        for (const route of routes) {
          const dir = resolve(root, 'dist', route)
          mkdirSync(dir, { recursive: true })
          copyFileSync(index, resolve(dir, 'index.html'))
        }
      },
    },
  ],
  server: {
    port: 4179,
    host: true,
  },
})
