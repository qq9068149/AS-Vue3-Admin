<script setup>
import { ref } from 'vue'

const docState = ref('saved')
</script>

<template>
    <div class="transition-container">
        <Transition name="slide-up" mode="out-in">
            <!-- out-in是为了避免在切换时两个元素同时存在，意思是离开再进入 -->
            <div v-if="docState === 'saved'">
                <el-button type="primary" @click="docState = 'edited'">Edit</el-button>
            </div>
            <div v-else-if="docState === 'edited'">
                <el-button type="primary" @click="docState = 'editing'">Save</el-button>
            </div>
            <div v-else-if="docState === 'editing'">
                <el-button type="primary" @click="docState = 'saved'">Cancel</el-button>
            </div>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.transition-container {
    background-color: #fff;
    min-height: 100%;
    border-radius: 4px;
    text-align: center;
    padding-top: 100px;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.25s ease-out;
}


.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-enter-to {
    opacity: 1;
    transform: translateY(0);
}


.slide-up-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>