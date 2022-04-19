import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  plugins: [
    vue(),
    ElementPlus()
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  base: process.env.NODE_ENV === 'production'
    ? '/template-element-plus/'     // 生产环境构建路径
    : '/',
  build: {
    outDir: 'dist'
  }
})
