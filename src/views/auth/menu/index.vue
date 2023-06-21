<template>
	<div class="card content-box">
		<a-alert class="w-100 mb-20" message="菜单权限 🍇🍒🥭🍏" type="info" />
		<a-alert
			class="w-100"
			:message="'目前菜单权限使用动态路由实现,模拟后台根据不同用户角色返回对应路由,注意观察左侧菜单变化(admin 账号可查看所有菜单、user 账号只可查看部分菜单)'"
			type="success"
		/>
		<a-button class="mt-20" type="primary" @click="handleToLogin"
			><template #icon><user-outlined /></template>登录其他账号</a-button
		>

		<a-tree
			v-model:expandedKeys="expandedKeys"
			v-model:selectedKeys="selectedKeys"
			v-model:checkedKeys="checkedKeys"
			checkable
			:tree-data="treeData"
			:field-names="fieldNames"
			@select="treeSelect"
		>
			<template #title="{ meta }">
				{{ meta.title }}
			</template>
		</a-tree>
	</div>
</template>

<script setup lang="ts" name="menuAuth">
import { ref, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { LOGIN_URL } from "@/config";
import { useUserStore } from "@/stores/modules/user";
import { useAuthStore } from "@/stores/modules/auth";

const router = useRouter();
const userStore = useUserStore();

const handleToLogin = () => {
	userStore.setToken("");
	router.push(LOGIN_URL);
};
// 展开指定的树节点
const expandedKeys = ref<string[]>(["/menu/menu2"]);
// 设置选中的树节点
const selectedKeys = ref<string[]>([]);
// 选中复选框的树节点
const checkedKeys = ref<string[]>(["/home/index", "/menu/menu2/menu22/menu222"]);
// 替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段
const fieldNames: any = {
	children: "children",
	key: "path"
};
const authStore = useAuthStore();
const menuList = computed(() => authStore.showMenuListGet);
const treeData: object = menuList.value;

// 树节点样式清除
const treeSelect = () => {
	selectedKeys.value = [];
};

watch(expandedKeys, () => {
	console.log("expandedKeys", expandedKeys);
});
watch(selectedKeys, () => {
	console.log("selectedKeys", selectedKeys);
});
watch(checkedKeys, () => {
	console.log("checkedKeys", checkedKeys);
});
</script>

<style scoped lang="less"></style>
