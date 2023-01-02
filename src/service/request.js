/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-01 19:24:26
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-01 19:32:58
 * @FilePath: \react\2_scaffold\learn_scaffold\src\service\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";

import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

instance.interceptors.request.use(config => {
  return config
}, err => {

})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  if (err && err.response.status) {
    switch (err.response.status) {
      case 400:
        console.log('请求错误')
        break
      case 401:
        console.log('unauthorized')
        break
      default:
        console.log('other err')
    }
  }
  return err
})

export default instance