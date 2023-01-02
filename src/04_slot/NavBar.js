/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-24 22:10:07
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-24 22:50:13
 * @FilePath: \react\2_scaffold\learn_scaffold\src\04_slot\NavBar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props

    return (
      <div className='nav-bar'>
        <div className='nav-left'>
          {leftSlot}
        </div>
        <div className='nav-center'>
          {centerSlot}
        </div>
        <div className='nav-right'>
          {rightSlot}
        </div>
      </div>
    )
  }
}
