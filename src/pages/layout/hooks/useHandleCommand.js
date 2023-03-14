import storage from '@/utils/storage'

export default () => {
  // 退出登录
  const exitLogin = () => {
    storage.clear()
    window.location.href = '/'
  }

  const handleCommand = command => {
    switch (command) {
      case 'exit':
        exitLogin()
        break
    }
  }

  return { handleCommand }
}
