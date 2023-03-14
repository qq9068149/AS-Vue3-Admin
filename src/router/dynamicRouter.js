import useUserStore from '@/store/modules/user'
import storage from '@/utils/storage'

// views的集合
const modules = import.meta.glob('../views/**/**/**.vue')

// 获取组件
const getComponent = component => {
  return modules[`../views${component}.vue`] || null
}

// 格式化路由
const formatRouter = (data = []) => {
  return data.map(item => {
    item.component = getComponent(item.component)
    if (item.children && item.children.length > 0) {
      item.children = formatRouter(item.children)
    }
    return item
  })
}

// 添加动态路由
export const addRoutes = (router, parent = 'layout') => {
  const userStore = useUserStore()
  const menuList = JSON.parse(storage.get('menuList') || [])
  const routerData = formatRouter(menuList)
  const addFn = arr => {
    arr.forEach(element => {
      if (element.component) {
        router.addRoute(parent, element)
      } else if (element.children && element.children.length > 0) {
        addFn(element.children)
      }
    })
  }
  addFn(routerData)
  userStore.setMenuList(menuList)
}
