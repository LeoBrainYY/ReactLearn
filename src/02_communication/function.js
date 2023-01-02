/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-24 20:34:01
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-24 20:51:05
 * @FilePath: \react\2_scaffold\learn_scaffold\src\02_communication\function.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

import PropTypes from 'prop-types'

function Child (props) {
  const { name, age, height } = props

  return (
    <h2>{name + ' ' + age + ' ' + height}</h2>
  )
}


// 类型校验
Child.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child
          name='xiaoxin'
          age={18}
          height={1.88}></Child>
      </div>
    )
  }
}
