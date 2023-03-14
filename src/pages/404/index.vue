<template>
  <div class="not_found_container">
    <p>404</p>
    <el-button @click="back">返回首页</el-button>
  </div>
</template>

<script setup>
function back() {
  // history.back(); //返回上一页
  window.location.href = '/'
}
</script>

<style scoped lang="scss">
.not_found_container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    padding-bottom: 30px;
    font-size: 100px;
    font-weight: bold;
  }
}
</style>
