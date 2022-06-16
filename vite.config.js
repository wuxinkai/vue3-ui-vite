import { join } from 'path'
module.exports = {
  proxy: {
    '/api': {
      target: 'https://pvp.qq.com/api',
      changeOrigin: true, //开启代理
      rewrite: (path) => path.replace(/^\/api/, '')//重写
    }
  },
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  }
}
