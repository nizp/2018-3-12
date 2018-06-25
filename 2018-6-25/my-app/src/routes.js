import Vue from 'vue'
import VueRouter from 'vue-router';
import Login from './components/login.vue';
import Index from './components/index.vue';
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        component:Login
    },
    {
        path:'/index',
        component:Index
    }
]

export default new VueRouter({
    routes,
    mode:'history'
});