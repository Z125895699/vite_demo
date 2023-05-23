/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-05-21 21:42:57
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-05-23 21:17:04
 * @FilePath: /vite-project/src/components/Header/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// index.tsx
import './index.scss';
// 1. 导入svg
import { ReactComponent as ReactLogo } from '@assets/react.svg';

//导入图片
import logoSrc from '@assets/01.jpeg';

//导入json文件
import { dependencies } from '../../../package.json';

//导入worker文件
import Worker from './example.js?worker';


export function Header() {
  console.log('version',dependencies)

  // 1. 初始化 Worker 实例
  const worker = new Worker();
  // 2. 主线程监听 worker 的信息
  worker.addEventListener('message', (e) => {
    console.log(e);
  });

  const newlogoSrc = logoSrc
  
  return (
    <div className='w-screen'>
      <p className="bg-red-400">This is Header</p>
      <img src={newlogoSrc} alt="" />
      <ReactLogo/>
    </div>
  );
}
