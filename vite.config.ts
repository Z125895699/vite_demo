/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-05-21 21:10:24
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-04 11:21:54
 * @FilePath: /vite-project/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import svgr from 'vite-plugin-svgr';
import viteImagemin from 'vite-plugin-imagemin';
import vitePluginSemanticChunks from 'vite-plugin-semantic-chunks';
import { myVitePlugin } from './plugins/my-plugin'
import { testHookPlugin } from './plugins/test-hooks-plugin'

const variablePath = path.resolve('./src/variable.scss');

// 是否为生产环境，在生产环境一般会注入 NODE_ENV 这个环境变量，见下面的环境变量文件配置
const isProduction = process.env.NODE_ENV === 'production';

// 填入项目的 CDN 域名地址
const CDN_URL = 'https://coderdashu';

// https://vitejs.dev/config/
export default defineConfig({
  //css相关的配置 自动引入全局变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        }),
        tailwindcss()
      ]
    }
  },

  
  //手动制定项目根目录位置
  // root:path.join(__dirname,'src'),
  plugins: [
    react(),
    svgr(),
     // 忽略前面的插件
     viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9],
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    vitePluginSemanticChunks(),
    myVitePlugin('你好'),
    testHookPlugin()
  ],


  //配置别名
  resolve: {
    // 别名配置
    alias: {
      '@assets': path.join(__dirname, 'src/assets'),
      '@': path.join(__dirname, 'src/')
    }
  },

  //支持其他格式的文件
  assetsInclude:['.gltf'],

  //配置cdn
  base: isProduction ? CDN_URL: '/'
});
