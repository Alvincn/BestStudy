import Vue from 'vue';
import App from './App.vue';
// 引入vuex
import store from '@/store';
// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由
import router from './router';
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
