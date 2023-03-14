import { computed, ref } from 'vue'
import storage from '@/utils/storage'

export default () => {
  const isCollapse = ref(false)
  const menuList = JSON.parse(storage.get('menuList') || [])
  /**
   * menuType
   * 1 菜单
   * 2 不是菜单，是页面，通常是子路由
   */
  const menuListFillter = computed(() => {
    const f = list => {
      return list.filter(item => {
        if (item.children && item.children.length > 0) {
          item.children = f(item.children)
        }
        return item.menuType === 1
      })
    }
    return f(menuList)
  })
  return { isCollapse, menuListFillter }
}
