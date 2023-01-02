/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-26 23:34:19
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-26 23:42:04
 * @FilePath: \react\2_scaffold\learn_scaffold\src\08_controoledComponents\select.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      fruits: 'banana'
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <select
            name="fruits"
            onChange={e => this.handleChange(e)}
            value={this.state.fruits}>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橘子</option>
          </select>
          <input type="submit" value="提交"></input>
        </form>
      </div>
    )
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log(this.state.fruits)
  }

  handleChange (e) {
    console.log(e.target.value)
    this.setState({
      fruits: e.target.value
    })
  }
}
