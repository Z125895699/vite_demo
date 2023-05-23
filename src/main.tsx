/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-05-21 21:10:24
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-05-21 22:44:22
 * @FilePath: /vite-project/src/main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// import "tailwindcss/tailwind.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
