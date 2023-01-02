/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-30 21:08:14
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-30 23:55:44
 * @FilePath: \react\2_scaffold\learn_scaffold\src\09_HOC\04_lifiCyclehijack.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

function withRenderTime (WrappedComponent) {
  return class extends PureComponent {

    UNSAFE_componentWillMount () {
      this.beginTime = Date.now()
    }

    componentDidMount () {
      this.endTime = Date.now()
      const interVal = this.endTime - this.beginTime
      console.log(`${WrappedComponent.name} render Time: ${interVal}`)
    }

    render () {
      return (
        <WrappedComponent {...this.props}></WrappedComponent>
      )
    }
  }
}

class Home extends PureComponent {
  render () {
    return (
      <h2>Home</h2>
    )
  }
}

class About extends PureComponent {
  render () {
    return (
      <h2>About</h2>
    )
  }
}

const WithHome = withRenderTime(Home)
const WithAbout = withRenderTime(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <WithHome></WithHome>
        <WithAbout></WithAbout>
      </div>
    )
  }
}
