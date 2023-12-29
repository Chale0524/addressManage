import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/styles/index.scss'
// CSS common style sheet
import '@/styles/common.scss'

createApp(App).use(createPinia()).use(router).use(ElementPlus, { locale: zhCn, size: 'large', zIndex: 3000 }).mount('#app')
