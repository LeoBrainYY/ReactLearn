/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-20 22:12:53
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-20 22:25:53
 * @FilePath: \react\2_scaffold\learn_scaffold\src\16_router\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

import {
  HashRouter,
  Link,
  Route
} from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import profile from './pages/profile'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HashRouter>
          <Link to='/'>首页</Link>
          <Link to='/about'>关于</Link>
          <Link to='/profile'>我的</Link>

          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/profile' component={profile}></Route>
        </HashRouter>
      </div>
    )
  }
}
