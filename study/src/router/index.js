// 引入Vue
import Vue from 'vue';
// 引入VueRouter
import VueRouter from 'vue-router';
// 使用VueRouter
Vue.use(VueRouter);
// 引入路由文件
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
  ],
});
