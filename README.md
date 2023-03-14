# AS-Vue3-Admin

## 介绍

Vue3 + Vite + ElementPlus + sass + 动态路由

## node版本

v16.14.2

## npm版本

8.5.0

## 启动项目-开发环境

1.npm install
2.npm run serve

## 打包

测试环境：npm run build:test
生产环境：npm run build

## src目录说明

```txt
api                     #接口统一管理文件
assets                  #主要存放图片，自定义目录区分
components              #组件，自定义目录区分
pages                   #无需权限的页面
  --404                 #404页面
  --layout              #layout页面布局
  --login               #登入页面
  --welcome             #首页
router                  #路由配置
  --dynamicRouter.js    #路由方法封装
  --dynamicRouter.json  #mock动态路由
  --index.js            #路由入口
  --staticRouter.js     #静态路由
  --whiteRoutes.js      #静态白名单
store                   #pinia入口
utils                   #通用工具类
views                   #需要权限的页面
App.vue
main.js
```
