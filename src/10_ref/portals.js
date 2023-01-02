/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-31 00:39:29
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-31 01:02:50
 * @FilePath: \react\2_scaffold\learn_scaffold\src\10_ref\portals.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
// import { ReactDOM } from 'react-dom'
// React18版本更新写法 学习的React版本是16
import * as ReactDOM from 'react-dom'

class Modal extends PureComponent {
  render () {
    return (
      ReactDOM.createPortal(
        this.props.children,
        document.getElementById('modal')
      )
    )
  }
}

class Home extends PureComponent {
  render () {
    return (
      <div>
        <h2>Home</h2>
        <Modal>
          <h2>Title</h2>
        </Modal>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
      </div>
    )
  }
}
