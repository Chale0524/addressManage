import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path'
import viteCompression from 'vite-plugin-compression'
import { wrapperEnv } from './src/utils/getEnv'
// https://vitejs.dev/config/

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)

  return {
    base: './', // 打包路径
    plugins: [
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            title: viteEnv.VITE_APP_GLOB_APP_TITLE,
          },
        },
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, 'src'),
      },
    },

    css: {
      preprocessorOptions: {
        // 覆盖原element-plus/theme-chalk/src/common/var.scss
        scss: {
          // 重写侯的主题样式变量
          additionalData: `@use "@/styles/element/index.scss" as *;`,
        },
      },
    },

    //启动服务配置
    server: {
      host: '0.0.0.0', //
      port: 9527, // 服务端口号
      open: true, // 服务启动时是否自动打开浏览器
      https: false,
      cors: true, // 允许跨域
      proxy: {
        // 代理服务
        '/01': {
          target: 'http://www.whxiaochengzi.com/',
          ws: false,
          changeOrigin: true,
          // pathRewrite: {
          //   '^/qc-webapp': '/qc-webapp'
          // }
        },

        '/form': {
          target: 'http://www.whxiaochengzi.com/',
          ws: false,
          changeOrigin: true,
          // pathRewrite: {
          //   '^/qc-webapp': '/qc-webapp'
          // }
        },

        '/rs-sys': {
          target: 'https://cloudtest.circlemartech.com',
          ws: false,
          changeOrigin: true,
          // pathRewrite: {
          //   '^/rs-sys': '/rs-sys',
          // },
        },
      },
    },

    // 生产环境打包配置
    //去除 console debugger
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
})
