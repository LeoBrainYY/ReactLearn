/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-24 22:58:49
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-25 14:25:37
 * @FilePath: \react\2_scaffold\learn_scaffold\src\05_crossComponentCommunication\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

// 跨组件通信
function ProfileHeader (props) {
  return (
    <div>
      <h2>用户昵称:{props.nickname}</h2>
      <h2>level:{props.level}</h2>
    </div>
  )
}

function Profile (props) {
  return (
    <div>
      {/* <ProfileHeader nickname={props.nickname} level={props.level}></ProfileHeader> */}
      <ProfileHeader {...props}></ProfileHeader>
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
    const { nickname, level } = this.state

    return (
      <div>
        <Profile
          nickname={nickname}
          level={level}></Profile>
          <Profile {...this.state}></Profile>
      </div>
    )
  }
}
