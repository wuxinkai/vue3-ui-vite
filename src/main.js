import { createApp } from 'vue'
import App from './App.vue'

import store from './stores/store'
import './mack/index'
//
import axios from 'axios'
//挂载到app上
import router from './router/index'

// import installElementPlus from './plugins/element'
import './http'
// 全局css
import './index.css'
// import './assets/css/global.css'

//全局注册

//
const app = createApp(App)

app.config.globalProperties.$axios =axios ;

//插入vuex
app.use(store)

app.use(router)

//挂载
app.mount('#app')
