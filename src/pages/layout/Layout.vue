<template>
  <div class="layout-container">
    <section class="left_aside">
      <div class="logo" v-if="!isCollapse" @click="$router.replace('/')">
        <p>管理系统</p>
      </div>
      <Menus :isCollapse="isCollapse" :menuList="menuListFillter" />
    </section>
    <section class="right_aside">
      <section class="header_box">
        <div class="le_box">
          <Fold
            class="collapse_icon transition"
            :class="isCollapse ? 'ri' : ''"
            @click="isCollapse = !isCollapse"
          />
          <Breadcrumb />
        </div>
        <div class="ri_box">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <p>admin</p>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="exit">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </section>
      <section class="main_box">
        <router-view v-slot="{ Component }">
          <keep-alive :include="['welcome']">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </section>
    </section>
  </div>
</template>

<script setup>
import Menus from './Menus.vue'
import { Fold, ArrowDown } from '@element-plus/icons-vue'
import useHandleCommand from './hooks/useHandleCommand'
import useMenu from './hooks/useMenu'
import Breadcrumb from './Breadcrumb.vue'

// 菜单相关
const { isCollapse, menuListFillter } = useMenu()

// 右上角下拉菜单处理
const { handleCommand } = useHandleCommand()
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;

  .left_aside {
    background-color: #545c64;
    width: auto;
    overflow-y: auto;
    box-shadow: 0 0 10px #ccc;
    position: relative;
    z-index: 2;
    padding-top: 50px;

    .logo {
      width: 100%;
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        color: #fff;
        font-size: 22px;
      }
    }
  }

  .right_aside {
    flex: 1;
    display: flex;
    flex-direction: column;

    .header_box {
      height: 50px;
      background-color: #fff;
      box-shadow: 0 0 10px #ccc;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;

      .le_box {
        display: flex;
        align-items: center;

        .collapse_icon {
          width: 1.5em;
          height: 1.5em;
          color: #545c64;
          cursor: pointer;
          margin-right: 15px;

          &.ri {
            transform: rotateY(180deg);
          }
        }
      }

      .ri_box {
        display: flex;
        align-items: center;

        .el-dropdown-link {
          display: flex;
          align-items: center;
        }
      }
    }

    .main_box {
      flex: 1;
      overflow-y: auto;
      padding: 15px;
    }
  }
}
</style>
