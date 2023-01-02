/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-24 22:58:49
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-25 19:34:30
 * @FilePath: \react\2_scaffold\learn_scaffold\src\05_crossComponentCommunication\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

// 创建Context对象
const UserContext = React.createContext({
  nickname: 'abc',
  level: -1
})

const ThemeContext = React.createContext({
  color: 'black'
})

// 跨组件通信
function ProfileHeader () {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <ThemeContext.Consumer>
              {
                theme => {
                  return (
                    <div>
                      <h2 style={{color: theme.color}}>用户昵称:{value.nickname}</h2>
                      <h2>用户等级:{value.level}</h2>
                    </div>
                  )
                }
              }
            </ThemeContext.Consumer>
          )
        }
      }
    </UserContext.Consumer>
  )
}

function Profile (props) {
  return (
    <div>
      <ProfileHeader></ProfileHeader>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nickname: 'xiaoxin',
      level: 99
    }
  }

  render() {
    // const { nickname, level } = this.state

    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{color: 'red'}}>
            <Profile></Profile>
          </ThemeContext.Provider>
        </UserContext.Provider>
        {/* 展示默认数据 */}
        <Profile></Profile>
        {/* <Profile
          nickname={nickname}
          level={level}></Profile>
          <Profile {...this.state}></Profile> */}
      </div>
    )
  }
}
