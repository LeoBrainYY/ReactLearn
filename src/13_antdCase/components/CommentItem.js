/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-01 00:57:49
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-01 03:03:24
 * @FilePath: \react\2_scaffold\learn_scaffold\src\13_antdCase\components\CommentItem.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

import { Avatar, Button, Comment, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

export default class CommentItem extends PureComponent {
  render() {
    const { nickname, avatar , datetime, content } = this.props.commentInfo

    return (
      <Comment
        author={<a>{nickname}</a>}
        avatar={<Avatar src={avatar} alt={nickname}/>}
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={datetime}>
            <span>{datetime}</span>
          </Tooltip>
        }
        actions={[
          <span onClick={() => { this.deleteComment() }}><DeleteOutlined></DeleteOutlined>delete comment</span>
        ]}
      />
    )
  }

  
  deleteComment () {
    // 调用父组件的函数
    this.props.removeComment()
  }
}
