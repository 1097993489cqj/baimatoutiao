// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/view/login'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { name: '/login', path: '/login', component: Login }
  ] // 配置路由规则
})
export default router
