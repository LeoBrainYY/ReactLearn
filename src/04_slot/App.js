/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-24 22:09:32
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-24 22:56:09
 * @FilePath: \react\2_scaffold\learn_scaffold\src\04_slot\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

import NavBar from './NavBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar
          leftSlot={<span>123</span>}
          centerSlot={<span>abc</span>}
          rightSlot={<a href='www.bilibili.com'>a</a>}></NavBar>
      </div>
    )
  }
}
