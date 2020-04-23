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
      redirect: '/welcome', // 每当用户来访问 /home 的时候，除了要展示 一个 Home 组件，还要重定向到 /labelitem 中，从而，在 Home 组件的右侧，展示一个 欢迎的子组件
      children: [
        // 注意：只要是 children 属性，匹配到的 子路由，这些即将要展示的子路由对应的组件，必须替换到 父组件的 router-view 中
        // 子路由，今后，所有的功能页面，都放到了 Home 的子路由中进行展示
        {path: '/welcome', replace: true, component: () => import('../components/page/welcome/Welcome'), name: 'Welcome'}
      ]
    }
  ]
})