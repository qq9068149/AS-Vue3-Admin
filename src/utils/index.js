/**
 * 防抖函数
 * @param func 需要包装的函数
 * @param delay 延迟时间，单位ms
 * @param immediate 是否默认执行一次(第一次不延迟)
 */
export const debounce = (func, delay, immediate = false) => {
  let timer = null
  return (...args) => {
    if (immediate) {
      func.apply(this, args) // 确保引用函数的指向正确，并且函数的参数也不变
      immediate = false
      return
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 * File转base64
 * @param file
 * @return base64
 * */
export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    let fileResult = ''
    reader.readAsDataURL(file)
    //开始转
    reader.onload = () => {
      fileResult = reader.result
    }
    //转失败
    reader.onerror = error => {
      reject(error)
    }
    //结束 resolve
    reader.onloadend = () => {
      resolve(fileResult)
    }
  })
}

/**
 * 获取今天日期
 * @param { string } delimiter 分割符
 * @returns string
 */
export function getTodayDate(delimiter = '-') {
  const date = new Date()
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate()
  d = d < 10 ? '0' + d : d
  return `${y}${delimiter}${m}${delimiter}${d}`
}
