/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-02 00:25:00
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-02 19:28:54
 * @FilePath: \react\redux\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleWare from 'redux-thunk'

import reducer from './reducer.js'

const storeEnhancer = applyMiddleware(thunkMiddleWare)

const store = createStore(reducer, storeEnhancer)

export default store