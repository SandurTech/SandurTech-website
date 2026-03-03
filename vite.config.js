import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Suppress @import deprecation warnings until migration to @use is complete
        silenceDeprecations: ['import', 'global-builtin'],
      }
    }
  }
})
