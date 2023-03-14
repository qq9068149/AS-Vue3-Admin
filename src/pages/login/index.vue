<template>
  <div class="login_container">
    <div class="main">
      <div class="title">管理系统</div>
      <el-form :model="formData">
        <el-form-item>
          <el-input
            type="text"
            placeholder="请输入用户名"
            :prefix-icon="User"
            v-model.trim="formData.userName"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            placeholder="请输入密码"
            :prefix-icon="Lock"
            v-model.trim="formData.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="btn_box">
            <el-button type="primary" @click="loginFn">登录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import storage from '@/utils/storage'
import menuList from '@/router/dynamicRouter.json'
// import { login } from '@/api/user';

const $router = useRouter()

const formData = reactive({
  userName: 'admin',
  password: '123456'
})

const loginFn = async () => {
  // await login(formData);
  storage.set('menuList', menuList) // 添加动态路由数据
  storage.set('token', 'this is a token') // 设置token
  $router.replace('/')
}
</script>

<style lang="scss" scoped>
.login_container {
  height: 100vh;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;

  .main {
    width: 600px;
    padding: 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px #ccc;

    .title {
      text-align: center;
      padding-bottom: 30px;
      font-size: 28px;
    }

    .btn_box {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
