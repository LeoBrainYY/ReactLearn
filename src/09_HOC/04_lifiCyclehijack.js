/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-30 21:08:14
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-30 23:46:07
 * @FilePath: \react\2_scaffold\learn_scaffold\src\09_HOC\04_lifiCyclehijack.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

class Home extends PureComponent {

  // 即将渲染
  UNSAFE_componentWillMount () {
    this.beginTime = Date.now()
    console.log(this.beginTime, 'this.beginTime')
  }

  // 渲染完成
  
  render () {
    return (
      <h2>Home</h2>
    )
  }

  componentDidMount () {
    this.endTime = Date.now()
    const interVal = this.endTime - this.beginTime
    console.log(`Home渲染时间${interVal}`)
  }
}

class About extends PureComponent {
  render () {
    return (
      <h2>About</h2>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <About></About>
      </div>
    )
  }
}
