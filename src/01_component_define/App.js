/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-24 18:54:44
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-24 19:04:10
 * @FilePath: \react\2_scaffold\learn_scaffold\src\01_component_define\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// { Component } 对象的解构
import React, { Component } from "react";


// 函数式组件没有内部状态
// 没有this对象
export default function App () {
  return (
    <div>
      function Component
    </div>
  )
}

// export default class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       message: 'Hello World'
//     }
//   }

//   render () {
//     return (
//       <div>
//         <h2>{this.state.message}</h2>
//       </div>
//     )
//   }
// }
