/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-31 00:08:15
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-31 00:39:33
 * @FilePath: \react\2_scaffold\learn_scaffold\src\10_ref\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent, createRef, forwardRef } from 'react'

class Home extends PureComponent {
  render () {
    return (
      <h2>Home</h2>
    )
  }
}

/**
 * 高阶组件forwardRef
 */
const Profile = forwardRef(function (props, ref) {
  return <p ref={ref}>profile</p> // 通过点击获取当前p元素 
})


export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {

    }

    this.titleRef = createRef()
    this.homeRef = createRef()
    this.profileRef = createRef()
  }

  render() {
    return (
      <div>
        <h2 ref={ this.titleRef }>Hello World</h2>
        <Home ref={ this.homeRef }></Home>
        {/* 函数式组件不能直接传递ref 而且ref属性不会被传递到props中 */}
        <Profile ref={ this.profileRef }></Profile>
        <button onClick={() => { this.printRef() }}>打印ref</button>
      </div>
    )
  }

  printRef () {
    console.log(this.titleRef.current)
    console.log(this.homeRef.current)
    console.log(this.profileRef.current)
  }
}
