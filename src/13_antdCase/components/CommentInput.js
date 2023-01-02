/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-01 00:57:40
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-01 02:55:15
 * @FilePath: \react\2_scaffold\learn_scaffold\src\13_antdCase\components\CommentInput.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

import { Input, Button } from 'antd'

export default class CommentInput extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      content: ''
    }
  }

  render() {
    return (
      <div>
        CommentInput
        <Input.TextArea
          rows={4}
          value={ this.state.content }
          onChange={ e => { this.getInputValue(e) }}></Input.TextArea>
        <Button
          style={{ marginTop: '10px'}}
          type='primary'
          onClick={() => { this.addComment() }}>add Comment</Button>
      </div>
    )
  }

  getInputValue (e) {
    this.setState({
      content: e.target.value
    })
  }

  addComment () {
    console.log(this.state.content)
    const date = new Date(Date.now())

    const commentInfo = {
      id: Date.now(),
      avatar: 'https://avatars.githubusercontent.com/u/76774640?v=4',
      nickname: 'xiaoxin',
      datetime: date.toString(),
      content: this.state.content
    }

    this.props.submitGet(commentInfo)

    this.setState({
      content: ''
    })
  }
}
