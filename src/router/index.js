import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/login/Login'
import Home from '../components/home/Home'

Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      replace: true,
      redirect: '/login'
    }, {
      path: '/login',
      replace: true,
      component: Login,
    },
    {
      path: '/home',
      component: Home,
      replace: true,
    }
  ]
})