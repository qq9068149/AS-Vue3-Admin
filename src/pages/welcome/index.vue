<template>
  <div class="welcome_container">
    <p>欢迎使用</p>
    <el-input v-model="num" placeholder="keep-alive测试"></el-input>
  </div>
</template>

<script>
export default { name: 'welcome' }
</script>

<script setup>
import { ref } from 'vue'
const num = ref()
</script>

<style scoped lang="scss">
.welcome_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  min-height: 100%;
  padding: 10%;

  p {
    padding-bottom: 50px;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 2px;
  }
}
</style>
