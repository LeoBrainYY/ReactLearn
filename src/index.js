/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-24 11:18:59
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-04 23:42:15
 * @FilePath: \react\2_scaffold\learn_scaffold\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';


// 在自己的业务代码逻辑中导入StoreContext 和 store
// 再把store传入封装的高阶函数中 可以获取到store
import store from './store'
// import { StoreContext } from './utils/context';

// 使用官方提供的和StoreContext功能相同的Provider
import { Provider } from 'react-redux';

import 'antd/dist/antd.css'
// import App from './App';
// import App from './01_component_define/App'
// import App from './01_component_define/life_cycle'
// import App from './02_communication/App'
// import App from './02_communication/ParentComponentToSon'
// import App from './02_communication/function'
// import App from './02_communication/childToParentCommunication'
// import App from './03_communication_case/App'
// import App from './04_slot/App'
// import App from './05_crossComponentCommunication/App'
// import App from './05_crossComponentCommunication/context'
// import App from './05_crossComponentCommunication/functionContext'
// import App from './06_setState/App'
// import App from './07_eventbus/App'
// import App from './08_controoledComponents/App'
// import App from './08_controoledComponents/controlComponent'
// import App from './08_controoledComponents/select'
// import App from './09_HOC/define'
// import App from './09_HOC/useHoc'
// import App from './09_HOC/02_useHoc'
// import App from './09_HOC/03_Hoc'
// import App from './09_HOC/03_renderCheck'
// import App from './09_HOC/04_lifiCyclehijack'
// import App from './09_HOC/05_hocRenderTime'
// import App from './10_ref/App'
// import App from './10_ref/portals'
// import App from './11_inlineStyle/App'
// import App from './12_antd/App'
// import App from './13_antdCase/App'
// import App from './14_axios/App'
import App from './15_redux/App'


// import './03_communication_case/style.css'
import './04_slot/style.css'

// modal案例
import './css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App name='xiaoxin'/>
  </Provider>
);

// root.render(
//     <StoreContext.Provider value={store}>
//       <App name='xiaoxin'/>
//     </StoreContext.Provider>
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
