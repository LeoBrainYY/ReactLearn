/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-30 17:37:53
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-30 21:06:49
 * @FilePath: \react\2_scaffold\learn_scaffold\src\09_HOC\03_renderCheck.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

class LoginPage extends PureComponent {
  render () {
    return (
      <h2>login page</h2>
    )
  }
}

function withAuth (WrappedCompoent) {
    const newCpn =  props => {
      const { isLogin } = props
      if (isLogin) {
        return <WrappedCompoent {...props}></WrappedCompoent>
      } else {
        return <LoginPage></LoginPage>
      }
    }

    // 修改组件展示名
    newCpn.displayName = 'AuthCpn'

    return newCpn
}

class CartPage extends PureComponent {
  render () {
    return (
      <h2>CartPage</h2>
    )
  }
}

const AuthCartPage = withAuth(CartPage)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={true}></AuthCartPage>
      </div>
    )
  }
}
