<script>
import { ElMenu, ElMenuItem, ElSubMenu, ElIcon } from 'element-plus'
import { h, defineComponent } from 'vue'
import * as Icon from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  props: {
    isCollapse: { type: Boolean, required: true }, // 是否收缩
    activeIndex: { type: String, default: '1' }, // 默认选中
    menuList: { type: Array, default: [] } // 菜单列表
  },
  setup(props) {
    const $route = useRoute()

    // 渲染图标
    function renderIcon(icon) {
      return h(ElIcon, null, {
        default: () => h(Icon[icon], { style: { fontSize: '16px' } })
      })
    }

    // 渲染子菜单
    function renderMenu(list) {
      const res = list.map(item => {
        let ele
        if (!item.children || item.children.length === 0) {
          ele = h(
            ElMenuItem,
            { index: item.path },
            {
              default: () => item.icon && renderIcon(item.icon),
              title: () => h('span', null, item.meta.title)
            }
          )
        } else {
          ele = h(
            ElSubMenu,
            { index: item.path },
            {
              title: () => [
                item.icon && renderIcon(item.icon),
                h('span', null, item.meta.title)
              ],
              default: () => renderMenu(item.children)
            }
          )
        }
        return ele
      })
      return res
    }

    return () =>
      h(
        ElMenu,
        {
          defaultActive: $route.path,
          class: 'el-menu-vertical-demo',
          textColor: '#fff',
          activeTextColor: '#fff',
          backgroundColor: '#545c64',
          uniqueOpened: true,
          collapse: props.isCollapse,
          router: true
        },
        { default: () => renderMenu(props.menuList) }
      )
  }
})
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;

  .el-menu-item {
    &.is-active {
      background-color: #6a747e;
    }
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
