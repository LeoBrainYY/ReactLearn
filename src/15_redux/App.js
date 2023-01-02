/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-02 00:53:45
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-02 12:15:07
 * @FilePath: \react\2_scaffold\learn_scaffold\src\15_redux\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

import Home from './home2'
import About from './about2'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <hr></hr>
        <About></About>
        <h2>Hello</h2>
      </div>
    )
  }
}
