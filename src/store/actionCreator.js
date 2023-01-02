/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-02 00:31:31
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-02 00:50:42
 * @FilePath: \react\redux\store\actionCreator.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT
} from './constants.js'

// export function addAction (num) {
//   return {
//     type: 'INCREMENT',
//     num
//   }
// }

// export const addAction = (num) => {
//   return {
//     type: 'DECREMENT',
//     num 
//   }
// }

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num
})

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num
})

export const incAction = () => ({
  type: INCREMENT
})

export const decAction = () => ({
  type: DECREMENT
})