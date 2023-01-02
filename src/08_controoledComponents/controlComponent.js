/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-26 23:18:05
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-26 23:33:31
 * @FilePath: \react\2_scaffold\learn_scaffold\src\08_controoledComponents\controlComponent.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={ (e) => this.handleSumbmit(e) }>
          <label htmlFor='username'>
            用户<input
                  type="text"
                  id='username'
                  onChange={e => this.handleChange(e)}
                  value={this.state.username}></input>
          </label>
          <input type="submit" value="提交"></input>
        </form>
      </div>
    )
  }

  handleSumbmit (e) {
    // 阻止表单默认行为提交
    e.preventDefault()
  }

  handleChange (e) {
    // console.log()
    this.setState({
      username: e.target.value
    })
    console.log(e.target.value)
  }
}
