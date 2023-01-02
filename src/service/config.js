/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-01 19:25:00
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-01 19:28:09
 * @FilePath: \react\2_scaffold\learn_scaffold\src\service\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const devBaseURL = 'https://httpbin.org'
const proBaseURL = 'https://production.org'

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 5000