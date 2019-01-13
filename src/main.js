import Vue from 'vue';
import App from './App.vue';


//导入element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//导入base.css
import './assets/base.css'

//导入路由
import router from './lib/router';

//导入axios插件
import vueAxios from './lib/vue-axios';
Vue.use(vueAxios);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});