/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-25 19:36:53
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-25 20:42:07
 * @FilePath: \react\2_scaffold\learn_scaffold\src\06_setState\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={() => {this.increment()}}>+1</button>
      </div>
    )
  }

  increment () {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
