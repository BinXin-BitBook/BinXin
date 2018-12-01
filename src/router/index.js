/*
* 路由器模块
* */
import Vue from 'vue' // vue-router路由插件必然要引入Vue
import VueRouter from 'vue-router' // vue-router路由插件

// 注册路由
import Home from '../views/Home'
import About from '../views/About'
import News from '../views/News'
import Message from '../views/Message'

Vue.use(VueRouter) // 使用路由

export default new VueRouter({ // 路由器模块向外暴露路由器对象; 默认暴露入口 main.js 引入可以为任何名字
// n个路由
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          // path: '/news', // path最左侧的 / 永远代表根路径, 不对
          path: '/home/news',
          component: News
        },
        {
          path: 'message', // path路径不加 / 代表,父路径下的
          component: Message
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
// 1.定义路由组件
// 2.注册路由
// 3.使用路由 <router-link> <router-view>
