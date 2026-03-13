import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Function to safely add Cloudflare plugin
function getPlugins() {
  const plugins = [react()]

  try {
    const mod = require('@cloudflare/vite-plugin') // use require instead of await
    if (mod && typeof mod.cloudflare === 'function') {
      plugins.push(mod.cloudflare())
    }
  } catch (err) {
    // Cloudflare plugin not installed, continue without it
  }

  return plugins
}

export default defineConfig({
  plugins: getPlugins(),
  base: 'https://sunhakportfolio.me/'
})