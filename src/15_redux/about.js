/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-02 01:06:11
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-02 10:56:27
 * @FilePath: \react\2_scaffold\learn_scaffold\src\15_redux\About.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import store from '../store'

import {
  subAction
} from '../store/actionCreator'

import { Button } from 'antd'


export default class About extends PureComponent {

  constructor (props) {
    super(props)

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount () {
    console.log('mount')
    this.unSubscribe = store.subscribe(() => {
      console.log('subscribe func execute')
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount () {
    this.unSubscribe()
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数: {}</h2>
        <Button type={'primary'} onClick={ () => this.decrement() }>-1</Button>
        <Button type={'primary'} onClick={ () => this.subNumber(5) }>-5</Button>
      </div>
    )
  }

  decrement () {
    store.dispatch(subAction(1))
  }

  subNumber (num) {
    store.dispatch(subAction(num))
  }
}
