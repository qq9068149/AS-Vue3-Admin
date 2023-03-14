import axios from 'axios'
import storage from './storage'
import { ElMessage } from 'element-plus'

const baseURL = import.meta.env.VITE_APP_BASE_URL

// 创建axios实例
const service = axios.create({
  baseURL,
  timeout: 1000 * 30,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    const TOKEN = storage.get('token') || null
    if (TOKEN) config.headers['token'] = TOKEN
    if (config.method === 'get') {
      config.params = config.data
    }
    return config
  },
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const { status, data } = response
    if (status === 200) {
      const code = +data.code
      switch (code) {
        case 200: // 成功
          return data
        case 400: // 错误
          ElMessage.error(data.msg)
          return data
        case 401: // 校验token异常
          storage.clear()
          window.location.href = '/'
          break
        case 501: // 权限不足
          ElMessage.error('权限不足')
          window.location.href = '/'
          break
        default:
          ElMessage.error('请求发生错误')
      }
    } else {
      ElMessage.error('服务器繁忙')
    }
  },
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)

export default service.request
