import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/element/index.scss';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import ElementPlus from 'element-plus';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus, {
    zIndex: 3000,
    locale: zhCn,
});
app.mount('#app');
