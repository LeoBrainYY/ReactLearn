/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-01 03:17:21
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-01 23:14:06
 * @FilePath: \react\2_scaffold\learn_scaffold\src\14_axios\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

// import axios from 'axios'
import instance from '../service/request'

export default class App extends PureComponent {

  constructor (props) {
    super(props)

    this.state = {
      products: []
    }
  }

  async componentDidMount () {
    // this.setState({
    //   products: [...this.state.props, ...res]
    // })

    // axios({
    //   url: 'https://httpbin.org/get',
    //   params: {
    //     name: 'xiaoxin'
    //   }
    // }).then(res => {
    //   console.log(res)
    // }).catch(res => {
    //   console.error(res)
    // })

    // axios({
    //   url: 'https://httpbin.org/post',
    //   data: {
    //     name: 'xiaoxin',
    //     age: 18
    //   },
    //   method: 'post'
    // }).then(res => {
    //   console.log(res)
    // }).catch(res => {
    //   console.error(res)
    // })
    
    // axios.get('https://httpbin.org/get', {
    //   params: {
    //     name: 'lilei',
    //     age: 30
    //   }
    // }).then(console.log)

    // axios.post('https://httpbin.org/post', {
    //   name: 'xiaoxin',
    //   age: 18
    // }).then(console.log)

    // 通过async await的方法获取正确和错误的结果
    // try {
    //   const result = await axios.get('https://httpbin.org/get', {
    //     params: {
    //       name: 'lilei',
    //       age: 30
    //     }
    //   })
    //   console.log(result)
    // } catch (err) {
    //   console.log(err)
    // }

    // const request1 = axios({
    //   url: 'https://httpbin.org/get',
    //   params: {
    //     name: 'xiaoxin',
    //     age: 18
    //   }
    // })

    // const request2 = axios({
    //   url: 'https://httpbin.org/post',
    //   data: {
    //     name: 'lilei',
    //     age: 30
    //   },
    //   method: 'post'
    // })

    // axios.all([request1, request2]).then(([res1, res2]) => {
    //   console.log(res1, res2)
    // }).catch(err => {

    // })

    // const promise1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('promise1')
    //   }, 1000)
    // })

    // const promise2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('promise2')
    //   }, 3000)
    // })

    // Promise.all([promise1, promise2]).then(res => {
    //   console.log(res)
    // })

    // axios.interceptors.request.use(config => {
    //   console.log('请求被拦截')
    //   return config
    // }, err => {

    // })

    // axios.interceptors.response.use(res => {
    //   return res.data
    // }, err => {
    //   if (err && err.response) {
    //     switch (err.response.status) {
    //       case 400:
    //         console.log('请求错误')
    //         break
    //       case 401:
    //         console.log('未授权访问')
    //         break
    //       default:
    //         console.log('other error')
    //     }
    //   }
    //   return err
    // })

    // axios.get('https://httpbin.org/get', {
    //   params: {
    //     name: 'xiaoxin'
    //   }
    // }).then(res => {
    //   console.log(res)
    // }).catch(res => {
    //   console.error(res)
    // })

    instance({
      url: 'https://httpbin.org/get',
      params: {
        name: 'xiaoxin',
        age: 18
      }
    }).then(console.log)
  }

  render() {
    return (
      <div>
        123
      </div>
    )
  }
}
