/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-24 19:41:30
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-24 19:45:49
 * @FilePath: \react\2_scaffold\learn_scaffold\src\02_communication\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

function Header () {
  return (
    <div>Header</div>
  )
}

function Banner () {
  return (
    <h2>Banner</h2>
  )
}

function ProductionList () {
  return (
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  )
}

function Main () {
  return (
    <div>
      <Banner></Banner>
      <ProductionList ></ProductionList>
    </div>
  )
}

function Footer () {
  return (
    <div>Footer</div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        1231
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
}
