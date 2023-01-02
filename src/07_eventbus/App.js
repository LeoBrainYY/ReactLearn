/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-25 22:03:19
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-25 22:33:12
 * @FilePath: \react\2_scaffold\learn_scaffold\src\07_eventbus\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

import { EventEmitter } from 'events'

const eventBus = new EventEmitter()

class Home extends PureComponent {
  componentDidMount () {
    eventBus.addListener('sayHello', this.handleSayHelloListener)
  }

  componentWillUnmount () {
    eventBus.removeListener('sayHello', this.handleSayHelloListener)
  }

  handleSayHelloListener (message, num) {
    console.log(message, num)
  }

  render () {
    return (
      <div>
        Home
      </div>
    )
  }
}

class Profile extends PureComponent {
  render () {
    return (
      <div>
        profile
        <button onClick={e => this.emitEvent()}>点击Profile按钮</button>
      </div>
    )
  }

  emitEvent () {
    eventBus.emit('sayHello', 'Hello', '123')
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Profile></Profile>
        <Home></Home>
      </div>
    )
  }
}
