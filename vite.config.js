import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 对应截图中的第 10 行：@ 映射到 src 目录
      '@': path.resolve(__dirname, './src'),
      // 对应截图中的第 11 行：components 映射到 src/components
      'components': path.resolve(__dirname, './src/components'),
      // 对应截图中的第 12 行：utils 映射到 src/utils
      'utils': path.resolve(__dirname, './src/utils'),
      '@mui/styled-engine': '@mui/styled-engine-sc',
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 如果你的 Less 文件中使用了 JavaScript 表达式（如 Ant Design v4 的样式变量）
        // 这一行必须保留，以替代 craco-less 中的 javascriptEnabled: true
        javascriptEnabled: true,
      },
    },
  },
})
