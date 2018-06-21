import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import A from './views/aboutC/a';
import B from './views/aboutC/b';
import C from './views/aboutC/c';
import Bar from './views/bar';

Vue.use(Router);

const routes =  [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children:[
      {
        path:'a',
        component: A,
        name:"A"
      },
      {
        path:'b',
        component: B,
        name:"B"
      },
      {
        path:'c',
        component: C,
        name:"C"
      }
    ]
  },
  {
    path:'/Bar/:id',
    name: 'Bar', 
    component: Bar
  }
]



export default new Router({
  routes,
  mode:'history'
})
