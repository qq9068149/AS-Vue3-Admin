import { ElLoading } from 'element-plus'

const defaultOption = {
  lock: true,
  text: '请稍等'
}

export const withLoading = (fn, options = {}) => {
  // loading实例
  let loading
  // 打开loading
  const showLoading = opt => {
    loading = ElLoading.service(opt)
  }
  // 关闭loading
  const hideLoading = () => {
    if (loading) {
      loading.close()
      loading = null
    }
  }
  // 新的配置
  const _options = Object.assign(defaultOption, options)
  const newFn = (...args) => {
    try {
      showLoading(_options)
      const result = fn(...args)
      // 如果fn返回结果不是Promise，就直接返回result
      const isPromise = result instanceof Promise
      if (!isPromise) {
        hideLoading()
        return result
      }
      return result
        .then(res => {
          hideLoading()
          return res
        })
        .catch(err => {
          hideLoading()
          throw err
        })
    } catch (err) {
      hideLoading()
      throw err
    }
  }
  return newFn
}
