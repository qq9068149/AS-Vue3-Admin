# AS-Vue3-Admin -- 一款模仿的管理后台

## 介绍 📖

AS-Vue3-Admin 一款基于 Vue3.x、TypeScript、Vite3.2、Pinia、Ant Design Vue 开源的后台管理框架，使用目前最新技术栈开发。提供简单基于 antd vue ProTable 组件，在一定程度上节省您的开发效率。另外本项目还封装了一些常用组件(右键菜单等)、Hooks、指令、动态路由、按钮级别权限控制等功能。

### 在线预览 👀

- Link：[https://was666.gitee.io/as-vue3-admin](https://was666.gitee.io/as-vue3-admin)

### 代码仓库 ⭐

- Gitee：<https://gitee.com/was666/as-vue3-admin>

### 项目功能 🔨

- 使用 Vue3.x + TypeScript 开发，单文件组件**＜ script setup ＞**
- 采用 Vite3.2 作为项目开发、打包工具（配置 Gzip 打包、TSX 语法、跨域代理…）
- 使用 Pinia 替代 Vuex，轻量、简单、易用，集成 Pinia 持久化插件
- 使用 TypeScript 对 Axios 整个二次封装（请求拦截、取消、常用请求封装…）
- 基于 Ant Design Vue 二次封装简单 ProTable 组件
- 支持 Ant Design Vue 组件大小切换、i18n 国际化、颜色主题切换、暂未支持暗黑模式
- 使用 VueRouter 进行路由权限拦截、页面按钮权限配置、路由懒加载
- 使用 KeepAlive 对页面进行缓存，支持多级嵌套页面缓存
- 常用自定义指令开发（权限、复制、水印、拖拽、节流、防抖、长按…）
- 使用 Prettier 统一格式化代码，集成 ESLint、Stylelint 代码校验规范
- 使用 husky、lint-staged、commitlint、czg、cz-git 规范提交信息

### 安装使用步骤 📔

- **Clone：**

```text
# Gitee
git clone https://gitee.com/was666/as-vue3-admin.git
```

- **Install：**

```text
yarn
```

- **Run：**

```text
yarn dev
yarn serve
```

- **Build：**

```text
# 开发环境
yarn build:dev

# 测试环境
yarn build:test

# 生产环境
yarn build:pro
```

- **Lint：**

```text
# eslint 检测代码
yarn lint:eslint

# prettier 格式化代码
yarn lint:prettier

# stylelint 格式化样式
yarn lint:stylelint
```

- **commit：**

```text
# 提交代码（提交前会自动执行 lint:lint-staged 命令）
yarn commit
```
### 文件资源目录 📚

```text
AS-Vue3-Admin
├─ .husky                 # husky 配置文件
├─ .vscode                # VSCode 推荐配置
├─ build                  # Vite 配置项
├─ public                 # 静态资源文件（该文件夹不会被打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ directives          # 全局指令文件
│  ├─ enums               # 项目常用枚举
│  ├─ hooks               # 常用 Hooks 封装
│  ├─ languages           # 语言国际化 i18n
│  ├─ layouts             # 框架布局模块
│  ├─ routers             # 路由管理
│  ├─ stores              # pinia store
│  ├─ styles              # 全局样式文件
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 常用工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 项目主组件
│  ├─ main.ts             # 项目入口文件
│  └─ vite-env.d.ts       # 指定 ts 识别 vue
├─ .editorconfig          # 统一不同编辑器的编码风格
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js          # Eslint 校验配置文件
├─ .gitignore             # 忽略 git 提交
├─ .prettierignore        # 忽略 Prettier 格式化
├─ .prettierrc.js        # Prettier 格式化配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.js       # stylelint 样式格式化配置
├─ commitlint.config.js  # git 提交规范配置
├─ index.html             # 入口 html
├─ lint-staged.config.js # lint-staged 配置文件
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 全局配置文件
```

### 项目后台接口 🧩

项目后台接口完全采用 Mock 数据。
