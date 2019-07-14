import Vue from 'vue'
import App from './App.vue'
// 导包
import ElementUI from 'element-ui'
// 导样式
import 'element-ui/lib/theme-chalk/index.css'
// 注册实例
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
