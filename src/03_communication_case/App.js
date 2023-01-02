/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-24 21:26:49
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-24 21:57:38
 * @FilePath: \react\2_scaffold\learn_scaffold\src\03_communication_case\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

import TabControl from './TabControl'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentTitle: '新款'
    }
  }

  render() {
    return (
      <div>
        <TabControl item1Click={(index) => {this.itemClick(index)}} titles={['新款', '精选', '流行']}></TabControl>
        <h2>{this.state.currentTitle}</h2>
      </div>
    )
  }

  itemClick (index) {
    const titles = ['新款', '精选', '流行']
    this.setState({
      currentTitle: titles[index]
    })
  }
}
