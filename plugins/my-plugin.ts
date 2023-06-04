/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-06-03 22:22:09
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-06-03 22:26:29
 * @FilePath: /vite-project/src/plugins/myPlugin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Plugin } from 'vite';

// myPlugin.js
export function myVitePlugin(options:any) :Plugin{
  console.log(options)
  return {
    name: 'vite-plugin-xxx',
    load() {
      // 在钩子逻辑中可以通过闭包访问外部的 options 传参
    }
  }
}
