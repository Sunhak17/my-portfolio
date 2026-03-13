import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const plugins = [react()]
try {
  const mod = await import('@cloudflare/vite-plugin')
  if (mod && typeof mod.cloudflare === 'function') {
    plugins.push(mod.cloudflare())
  }
} catch (err) {
  // Cloudflare plugin not available in this environment; continue without it
}

export default defineConfig({
  plugins,
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})