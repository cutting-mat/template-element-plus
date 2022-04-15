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
  base: process.env.NODE_ENV === 'production'           // 生产/开发环境构建路径, 默认'/template-element-ui/'
    ? '/template-element-plus/'
    : '/',
  build: {
    outDir: 'dist'
  }
})
