import { defineConfig } from 'vite'

const plugins = []
try {
  const mod = await import('@cloudflare/vite-plugin')
  if (mod && typeof mod.cloudflare === 'function') {
    plugins.push(mod.cloudflare())
  }
} catch (err) {
  // Cloudflare plugin not available in this environment; continue without it
}

export default defineConfig({
  plugins: [react()],
  base: 'https://sunhakportfolio.me/'
})
