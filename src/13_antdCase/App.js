/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-01 00:56:44
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-01 03:05:53
 * @FilePath: \react\2_scaffold\learn_scaffold\src\13_antdCase\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import CommentInput from './components/CommentInput'
import CommentItem from './components/CommentItem'

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      commentList: []
    }
  }

  render() {
    return (
      <div style={{ width: '600px', padding: '20px'}}>
        {/* <CommentItem></CommentItem> */}
        {
          this.state.commentList.map((item, index) => {
            return <CommentItem
                      key={item.id}
                      commentInfo={item}
                      removeComment={ e => this.removeComment(index)}></CommentItem>
          })
        }
        <CommentInput submitGet={ info => { this.submitComment(info) }}></CommentInput>
      </div>
    )
  }

  submitComment (info) {
    console.log(info)
    this.setState({
      // 浅拷贝
      commentList: [...this.state.commentList, info]
    })
  }

  removeComment (index) {
    console.log(index)
    const newCommentList = [...this.state.commentList]
    // 从index开始删除 删除一个元素
    newCommentList.splice(index, 1)
    this.setState({
      commentList: newCommentList
    })
  }
}
