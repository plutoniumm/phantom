import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    fs: {
      allow: ['..', '.']
    },
    port: 3000
  }
})
