/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-02 00:25:00
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-04 23:38:45
 * @FilePath: \react\redux\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import createSagaMiddleWare from 'redux-saga'

// 导入定义的生成器函数
import saga from './saga'
import reducer from './reducer.js'

// composeEnhancers函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ({ trace: true })|| compose

// 创建sagaMiddleWare中间件
const sagaMiddleWare = createSagaMiddleWare()
// 引入thunk-MiddleWare中间件
const storeEnhancer = applyMiddleware(thunkMiddleWare, sagaMiddleWare)

// 使用开发工具的写法 把两个enhancer进行合并
const store = createStore(reducer, composeEnhancers(storeEnhancer))
// 原来没使用redux开发工具的写法
// const store = createStore(reducer, storeEnhancer)

sagaMiddleWare.run(saga)

export default store