import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 使用相对路径，部署到任意子路径或静态托管平台都能正确加载资源
  base: './',
})
