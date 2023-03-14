import { defineStore } from 'pinia';

export default defineStore('userStore', {
    state: () => ({
        menuList: []
    }),
    actions: {
        setMenuList(data) {
            this.menuList = data;
        }
    },
    persist: {
        enabled: false,// 关闭刷新后缓存
        strategies: [
            {
                storage: localStorage
            }
        ]
    }
})