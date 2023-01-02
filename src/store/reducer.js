/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-02 00:27:17
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-02 19:20:37
 * @FilePath: \react\redux\store\reducer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND
} from './constants.js'

const initialState = {
  counter: 0,
  banners: [],
  recommends: []
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER: 
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    case INCREMENT:
      return { ...state, counter: state.counter + 100 }
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners}
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends}
    default:
      return state
  }
}

export default reducer