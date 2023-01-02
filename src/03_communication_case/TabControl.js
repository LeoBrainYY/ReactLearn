/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-12-24 21:27:08
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2022-12-24 21:56:02
 * @FilePath: \react\2_scaffold\learn_scaffold\src\03_communication_case\TabControl.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

import PropTypes from 'prop-types'

export default class TabControl extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentIndex: 0 
    }
  }

  render() {
    const { titles } = this.props

    return (
      <div className='tab-control'>
        {
          titles.map((item, index) => {
            return (
              <div
                className={'tab-item ' + (index === this.state.currentIndex ? 'active' : '')}
                key={item}
                onClick={() => this.itemClick(index)}>
                <span>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }

  itemClick (index) {
    this.setState({ 
      currentIndex: index
    })

    const { item1Click } = this.props
    item1Click(index)
  }
}

TabControl.propTypes = {
  titles: PropTypes.array.isRequired
}
