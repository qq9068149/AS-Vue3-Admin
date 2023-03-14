/**
 * 下载文件
 * @param {string} url
 * @param {string} fileName
 */
export function downloadFile(url, fileName) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  // 响应类型设置为blob
  xhr.responseType = 'blob'
  // 请求成功
  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      const a = document.createElement('a')
      a.href = window.URL.createObjectURL(xhr.response)
      a.download = fileName
      // 将a标签添加到body中是为了更好的兼容性，谷歌浏览器可以不用添加
      document.body.appendChild(a)
      a.click()
      // 移除
      a.remove()
      // 释放url
      window.URL.revokeObjectURL(a.href)
    }
  })
  // 监听下载进度
  xhr.addEventListener('progress', function (e) {
    let percent = Math.trunc((e.loaded / e.total) * 100)
  })
  // 错误处理
  xhr.addEventListener('error', function (e) {
    // todo
  })
  // 发送请求
  xhr.send()
}

/**
 * 保存文件
 * @param {string} href
 * @param {string} fileName
 */
export function saveAsFile(href, fileName) {
  const a = document.createElement('a')
  a.download = fileName
  a.href = href
  // 将a标签添加到body中是为了更好的兼容性，谷歌浏览器可以不用添加
  document.body.appendChild(a)
  a.click()
  // 移除
  a.remove()
}
