/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-02 01:06:03
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-02 01:28:41
 * @FilePath: \react\2_scaffold\learn_scaffold\src\15_redux\home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

import store from '../store'

import {
  addAction
} from '../store/actionCreator'

import { Button } from 'antd'

export default class home extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount () {
    this.unSubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount () {
    // 取消订阅
    // 因为不能在componentDidMount中获取定义的变量 unSubscribe
    // 所以写成this.subScribe
    this.unSubscribe()
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: { this.state.counter }</h2>
        <Button type={'primary'} onClick={ () => this.increment() }>+1</Button>
        <Button type={'primary'} onClick={ () => this.addNumber(5) }>+5</Button>
      </div>
    )
  }

  increment () {
    store.dispatch(addAction(1))
  }

  addNumber (num) {
    store.dispatch(addAction(num))
  }
}
