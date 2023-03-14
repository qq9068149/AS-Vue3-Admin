const routes = [
  {
    name: 'layout',
    path: '/',
    meta: { title: 'layout' },
    component: () => import('@/pages/layout/Layout.vue'),
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        path: 'welcome',
        meta: { title: 'welcome' },
        component: () => import('@/pages/welcome/index.vue')
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    meta: { title: '登录' },
    component: () => import('@/pages/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/404/index.vue')
  }
]

export default routes
