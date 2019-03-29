// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入Vue,入口JS:创建Vue实例
import Vue from 'vue'
// 将App.vue组件渲染到index.html
import App from './App.vue'
import router from './router' // 路由器需要在入口文件引入
// import routertest from './router' // 路由器需要在入口文件引入

/* eslint-disable no-new  */
// 注意: 入口文件
new Vue({ // 配置对象的属性名都是一些确定的名称,不能随便修改(例如:router )
  el: '#app',
  components: {
    // 将App映射为标签
    App
  },
  // 模板 = 标签 + 字符串,表示使用组件标签
  template: '<App/>',
  // router: routertest,  路由器模块向外暴露路由器对象; 默认暴露入口 main.js 引入可以为任何名字,但是得起别名
  router
})
