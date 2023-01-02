/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-02 00:31:31
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-02 19:45:57
 * @FilePath: \react\redux\store\actionCreator.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import axios from 'axios'

import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND
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

// network data
export const changeBannerAction = (banners) => {
  return {
    type: CHANGE_BANNERS,
    banners
  }
}

export const changeRecommendAction = (recommends) => {
  return {
    type: CHANGE_RECOMMEND,
    recommends
  }
}

// redux-thunk
export const getHomeMultidataAction = (dispatch, getState) => {
  // 传入的dispatch就是store中的dispatch函数
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    const data = res.data.data
    console.log('轮播图', data.banner.list)
    console.log('推荐', data.recommend.list)
    dispatch(changeBannerAction(data.banner.list))
    dispatch(changeRecommendAction(data.recommend.list))
    // 注意此处的参数getState是一个函数
    console.log(getState(), 'getState查看')
  })
}