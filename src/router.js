import Vue from 'vue';
import VueRouter from 'vue-router';
//import Component
import Home from './components/Home';
import Loading from './components/Loading';
import Upload from './components/Upload';

Vue.use(VueRouter);


export const router = new VueRouter({
  mode:'history',
  linkExactActiveClass:"active",
  routes:[
    {path:'/', component:Home},
    {path:'/oauth2/callback', component:Loading},
    {path:'/upload', component:Upload}
  ]
})
