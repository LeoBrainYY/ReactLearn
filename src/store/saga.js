/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-04 23:37:27
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-05 00:06:17
 * @FilePath: \react\2_scaffold\learn_scaffold\src\store\saga.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { takeEvery, put, takeLatest } from 'redux-saga/effects'
import axios, { all } from 'axios'
import {
  FETCH_HOME_MULTIDATA
} from './constants'
import {
  changeBannerAction,
  changeRecommendAction
} from './actionCreator'
// 生成器函数
function* fetchHomeData () {
  // 这里不用写then 内部已经做过处理
  // get返回值是一个Promise 判断是一个Promise时 saga内部会做处理 直接获取到返回值的结果
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  // console.log(res)
  const banners = res.data.data.banner.list
  const recommends = res.data.data.recommend.list
  // yield put(changeBannerAction(banners))
  // yield put(changeRecommendAction(recommends))
  yield all([
    yield put(changeBannerAction(banners)),
    yield put(changeRecommendAction(recommends))
])
}

function* mySaga () {
  // takeLatest: 一次只能监听一个对应的action
  // takeEvery : 每一个action都会被执行
  // 拦截的Action
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeData)
  yield all([
    takeLatest(FETCH_HOME_MULTIDATA, fetchHomeData)
    // 距离监听多个action
    // takeLatest(ADD_NUMBER, fetchHomeData)
  ])
}

export default mySaga