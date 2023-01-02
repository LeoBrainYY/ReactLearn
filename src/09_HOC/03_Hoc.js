/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-26 23:56:11
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-30 17:36:19
 * @FilePath: \react\2_scaffold\learn_scaffold\src\09_HOC\define.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent, createContext  } from 'react'

function withUser (WrappedComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          user => {
            // 传入参数
            return <WrappedComponent {...props} {...user}></WrappedComponent>
          }
        }
      </UserContext.Consumer>
    )
  }
}

// 创建Context
const UserContext = createContext({
  nickname: 'default',
  level: -1,
  region: 'China'
})

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
      <UserContext.Consumer>
        {
          user => {
            return <h2>About: {`昵称: ${user.nickname} 等级: ${user.level} 区域: ${user.region}`}</h2>
          }
        }
      </UserContext.Consumer>
    )
  }
}

class Detail extends PureComponent {
  render () {
    return (
      <div>
        <ul>
          <li>{ this.props.nickname }</li>
          <li>{ this.props.level }</li>
          <li>{ this.props.region }</li>
        </ul>
      </div>
    )
  }
}

const UserHome = withUser(Home)
const UserDetail = withUser(Detail)

class App extends PureComponent {
  render() {
    return (
      <div>
        App:
        <UserContext.Provider value={{ nickname: 'xiaoxin', level: 10, region: 'China' }}>
          <UserHome></UserHome>
          <About></About>
          <UserDetail></UserDetail>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App