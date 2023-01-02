/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-25 22:36:05
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-25 22:46:10
 * @FilePath: \react\2_scaffold\learn_scaffold\src\08_controoledComponents\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.titleRef = createRef()
    this.titleEl = null
  }

  render() {
    return (
      <div>
        {/* <h2 ref="titleRef">Hello React</h2> */}
        {/* <h2 ref={this.titleRef}>Hello React</h2> */}
        <h2 ref={(arg) => this.titleEl = arg}>Hello React</h2>
        <button onClick={() => this.changeText()}>改变文本</button>
      </div>
    )
  }

  changeText () {
    // console.log(this.refs.titleRef)
    // this.refs.titleRef.innerHTML = 'hello xiaoxin'

    // console.log(this.titleRef.current)
    // this.titleRef.current.innerHTML = '123'

    console.log(this.titleEl)
    this.titleEl.innerHTML = 'TypeScript'
  }
}
