import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages는 https://cafephilia.github.io/fukuoka-trip/ 하위 경로에서 열린다
export default defineConfig({
  base: '/fukuoka-trip/',
  plugins: [vue()],
})
