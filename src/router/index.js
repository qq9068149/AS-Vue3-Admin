import { createRouter, createWebHashHistory } from 'vue-router'
import staticRouter from './staticRouter'
import storage from '@/utils/storage'
import whiteRoutes from './whiteRoutes'
import { addRoutes } from './dynamicRouter'
import useUserStore from '@/store/modules/user'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  routes: [...staticRouter],
  history: createWebHashHistory()
})

/**
 * 路由拦截器
 */
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.title) document.title = to.meta.title
  const TOKEN = storage.get('token') || null
  if (TOKEN) {
    logined(to, next)
  } else {
    loginNot(to, next)
  }
})

/**
 * 已登录处理
 */
const logined = (to, next) => {
  const userStore = useUserStore()
  const menuList = userStore.menuList
  if (!menuList || menuList.length === 0) {
    addRoutes(router) // 添加动态路由
    next({ ...to, replace: false })
    return
  }
  // 如果是跳转登录页则跳转到首页
  if (to.path === '/login') {
    next('/')
    return
  }
  next()
}

/**
 * 未登录处理
 */
const loginNot = (to, next) => {
  // 在免登录白名单，直接进入
  if (whiteRoutes.includes(to.path)) {
    next()
    return
  }
  next('/login')
}

router.afterEach(NProgress.done)

export default router
