/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-02 01:06:03
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-02 12:32:06
 * @FilePath: \react\2_scaffold\learn_scaffold\src\15_redux\home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

import { connect } from '../utils/connect'

// import store from '../store'

import {
  addAction
} from '../store/actionCreator'

import { Button } from 'antd'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: { this.props.counter }</h2>
        <Button type={'primary'} onClick={ () => this.props.increment() }>+1</Button>
        <Button type={'primary'} onClick={ () => this.props.addNumber(5) }>+5</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment () {
      dispatch(addAction(1))
    },
    addNumber (num) {
      dispatch(addAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
