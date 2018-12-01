// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入Vue,入口JS:创建Vue实例
import Vue from 'vue'
// 将App.vue组件渲染到index.html
import App from './App.vue'
import router from './router'
// main.js 文件引入样式,那么其他文件都可以用
import './components/test02/base.css'
Vue.config.productionTip = false

/* eslint-disable no-new  */
// 注意: 入口文件
new Vue({
  el: '#app',
  router,
  components: {
    // 将App映射为标签
    App
  },
  // 模板 = 标签 + 字符串,表示使用组件标签
  template: '<App/>'
})
