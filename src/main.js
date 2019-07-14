import Vue from 'vue'
import App from './App.vue'
// 导包 element
import ElementUI from 'element-ui'
// 导样式
import 'element-ui/lib/theme-chalk/index.css'
// 注册实例

// 导包 router 默认索引 文件夹存在index.js index.vue index.json 默认加载文件
// 2.使用vue-cli 的时候 @符号在路径中作为前缀使用的时候 代表src目录
import router from './router'

// 导入axios
import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
