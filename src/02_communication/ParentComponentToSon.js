/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-24 19:58:05
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-24 20:32:35
 * @FilePath: \react\2_scaffold\learn_scaffold\src\02_communication\ParentComponentToSon.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

class Child extends Component {
  // constructor (props) {
  //   super()
  //   // this.props = props
  // }

  render () {
    const { name, age, height } = this.props

    return (
      <div>
        {name}
        {age}
        {height}
        <h2>子组件展示:{ 'xiaoxin' + ' ' + 18 + ' ' + '1.88'}</h2>
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child
          name='xiaoxin'
          age='18'
          height='1.88'></Child>
      </div>
    )
  }
}
