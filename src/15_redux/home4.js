/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-02 01:06:03
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-02 19:43:36
 * @FilePath: \react\2_scaffold\learn_scaffold\src\15_redux\home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

// import { connect } from '../utils/connect'

import { connect } from 'react-redux'

// import store from '../store'

import {
  addAction,
  getHomeMultidataAction
} from '../store/actionCreator'

import { Button } from 'antd'

class Home extends PureComponent {
  componentDidMount () {
    // 通过映射获取到函数并执行
    // 这个函数执行dispatch 给dispatch的函数传入参数dispatch
    // 这个传入的dispatch在actionCreator.js中体现
    // 通过传入的dispatch再继续dispatch给reducer中State(数据源)传入数据的函数(就是在reducer中直接接收type类型的相对应的函数)
    this.props.getHomeMultidata()
  }

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
    },
    getHomeMultidata () {
      // 传入函数即可 不用调用
      // 此函数会被主动调用 并且会传入参数 在actionCreator.js(函数定义处)处理
      dispatch(getHomeMultidataAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
