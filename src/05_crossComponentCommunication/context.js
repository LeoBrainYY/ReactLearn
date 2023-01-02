/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-24 22:58:49
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-25 14:41:51
 * @FilePath: \react\2_scaffold\learn_scaffold\src\05_crossComponentCommunication\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

// 创建Context对象
const UserContext = React.createContext({
  nickname: 'abc',
  level: -1
})

// 跨组件通信
// function ProfileHeader (props) {
//   return (
//     <div>
//       <h2>用户昵称:</h2>
//       <h2>level:</h2>
//     </div>
//   )
// }

class ProfileHeader extends Component {
  render () {
    console.log(this.context)
    return (
      <div>
        <h2>用户昵称:{this.context.nickname}</h2>
        <h2>level:{this.context.level}</h2>
      </div>
    )
  }
}

ProfileHeader.contextType = UserContext // this.context

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
          <Profile></Profile>
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
