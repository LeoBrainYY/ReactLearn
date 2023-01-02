/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-26 23:56:11
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-27 00:12:10
 * @FilePath: \react\2_scaffold\learn_scaffold\src\09_HOC\define.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        123:{this.props.name}
      </div>
    )
  }
}


// 返回类组件
function enhanceComponent (WrappedComponent) {
  class NewComponent extends PureComponent {
    render () {
      return <WrappedComponent {...this.props}></WrappedComponent>
    }
  }

  // 更改展示名
  NewComponent.displayName = 'abc'
  return NewComponent
}

// 返回函数式组件
function enhanceComponent1 (WrappedComponent) {
  function NewComponent (props) {
    return <WrappedComponent {...props}></WrappedComponent>
  }

  // 更改展示名
  NewComponent.displayName = 'abc'
  return NewComponent
}

// const EnhanceComponent = enhanceComponent(App)
const EnhanceComponent = enhanceComponent1(App)

export default EnhanceComponent