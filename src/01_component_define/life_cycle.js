/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-24 19:09:13
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-24 19:27:02
 * @FilePath: \react\2_scaffold\learn_scaffold\src\01_component_define\render.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

class Cpn extends Component {
  render () {
    return (
      <div>
        Cpn
      </div>
    )
  }

  componentWillUnmount () {
    console.log('execute componentWillUnmount')
  }
}

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      counter: 0,
      isShow: true
    }
    console.log('execute constructor')
  }

  render() {
    console.log('execute render')
    return (
      <div>
        <h2>当前计数{this.state.counter}</h2>
        <button onClick={() => {this.increment()}}>+1</button>
        <hr></hr>
        <button onClick={() => this.changeStatus()}>切换</button>
        {this.state.isShow && <Cpn/>}
      </div>
    )
  }

  increment () {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeStatus () {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  componentDidMount () {
    console.log('execute componentDidMount')
  }

  componentDidUpdate () {
    console.log('execute componentDidUpdate')
  }
  
}
