// 到导入vue
import Vue from 'vue';
//导入路由
import VueRouter from 'vue-router';
//注册插件
Vue.use(VueRouter)


//导入login
import login from '../components/login.vue';
import index from '../components/index.vue';
//写规则
let routes = [{
    path:'/login',
    component:login
},{
    path:'/',
    component:index
}
]

//创建路由实例
let router = new VueRouter(
    {
        routes
    }
);

//暴露出去
export default router;