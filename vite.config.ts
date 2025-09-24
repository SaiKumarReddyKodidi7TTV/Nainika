import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Nainika/',       // ← ensures asset URLs start with /Nainika/
  plugins: [react()],
})