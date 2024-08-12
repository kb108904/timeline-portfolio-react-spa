import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'


dotenv.config

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    // Other Vitest options...
},
  plugins: [react()],
  // define process env
  define: {
    'process.env': process.env,
    'global':{}
  }
})