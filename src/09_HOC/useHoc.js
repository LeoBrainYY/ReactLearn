/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-26 23:56:11
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-27 23:22:03
 * @FilePath: \react\2_scaffold\learn_scaffold\src\09_HOC\define.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

// 高阶组件
function enhanceRegionProps (WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} region="China"></WrappedComponent>
  }
}

class Home extends PureComponent {
  render () {
    return (
      <div>
        <h2>Home: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
      </div>
    )
  }
}

class About extends PureComponent {
  render () {
    return (
      <div>
        <h2>Home: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
      </div>
    )
  }
}

const EnhanceHome = enhanceRegionProps(Home)
const EnhanceAbout = enhanceRegionProps(About)


class App extends PureComponent {
  render() {
    return (
      <div>
        App:
        <EnhanceHome nickname='xiaoxin' level={9}></EnhanceHome>
        <EnhanceAbout nickname='coderwhy' level={99}></EnhanceAbout>
      </div>
    )
  }
}

export default App