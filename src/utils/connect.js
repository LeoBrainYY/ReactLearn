import React, { PureComponent } from "react"

import { StoreContext } from "./context"

// import store from "../store"

/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-02 11:03:07
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-02 12:31:48
 * @FilePath: \react\2_scaffold\learn_scaffold\src\utils\connect.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function connect (mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC (WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      // EnhanceComponent.contextType = StoreContext
      // 会让此处的context有值
      // 不能写this.context
      // 这里的如果写this.context.getState()如果不传构造函数的参数context
      // this.context是没有值的
      constructor (props, context) {
        super(props)

        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }

      componentDidMount () {
        // 原本的封装是通过导入store 
        // 获取store.getState()
        // 获取sto.subscribe()等等
        // 对于一个封装的工具来说 这样依赖外部的包是不合理的
        // 我们通过createContext()来解决这个问题
        this.unSubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }

      componentWillUnmount () {
        this.unSubscribe()
      }

      render () {
        return <WrappedComponent {...this.props}
                                 {...mapStateToProps(this.context.getState())}
                                 {...mapDispatchToProps(this.context.dispatch)}></WrappedComponent>
      }
    }
    EnhanceComponent.contextType = StoreContext

    return EnhanceComponent
  } 
}