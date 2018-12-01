// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入Vue,入口JS:创建Vue实例
import Vue from 'vue'
// 将App.vue组件渲染到index.html
import App from './App.vue'

/* eslint-disable no-new  */
// 注意: 入口文件
new Vue({
  el: '#app',
  components: {
    // 将App映射为标签
    App
  },
  // 模板 = 标签 + 字符串,表示使用组件标签
  template: '<App/>'
})
