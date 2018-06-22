import Vue from 'vue'
import Router from 'vue-router'
import Content from './content/content.vue';
import Sh from './content/sh.vue';
import Detail from './detail/detail.vue';
Vue.use(Router);

const routes =  [
  {
    path: '/',
    name: 'Content',
    redirect:'/sh'
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: 'zhaopin/:job/:id',
    name: 'Content',
    component: Sh
  },
  
]



export default new Router({
  routes,
  mode:'history'
})
