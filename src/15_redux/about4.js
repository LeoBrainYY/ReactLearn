/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-02 01:06:11
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-02 19:29:19
 * @FilePath: \react\2_scaffold\learn_scaffold\src\15_redux\About.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
// import { connect  } from '../utils/connect'

import { connect } from 'react-redux'

// import store from '../store'

import {
  subAction
} from '../store/actionCreator'

import { Button } from 'antd'


function About (props) {
  return (
    <div>
      <h1>About</h1>
      <h2>当前计数: {props.counter}</h2>
      <Button type={'primary'} onClick={ () => props.decrement() }>-1</Button>
      <Button type={'primary'} onClick={ () => props.subNumber(5) }>-5</Button>
      <h1>Banner</h1>
        <ul>
          {
            props.banner.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      <hr></hr>
      <h1>Recommend</h1>
        <ul>
          {
            props.recommend.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter,
  banner: state.banners,
  recommend: state.recommends
})
const mapDispatchToProps = dispatch => ({
  decrement () {
    dispatch(subAction(1))
  },
  subNumber (num) {
    dispatch(subAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
