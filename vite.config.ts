/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-05-21 21:10:24
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-05-21 22:46:06
 * @FilePath: /vite-project/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';


const variablePath = path.resolve('./src/variable.scss');

// https://vitejs.dev/config/
export default defineConfig({

  //css相关的配置 自动引入全局变量
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@import "${variablePath}";`
      }
    },
    // postcss:{
    //   plugins:[
    //     autoprefixer({
    //       // 指定目标浏览器
    //       overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
    //     })
    //   ]
    // }
  },
  //手动制定项目根目录位置
  // root:path.join(__dirname,'src'),
  plugins: [react()],
})
