<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName">
      <button @click="search">Search</button>
    </div>
  </section>
</template>
<!--
绑定事件监听 (相当于是订阅消息)
触发事件      (发布消息)
-->
<script>
import PubSub from 'pubsub-js'
export default {
  data () {
    return {
      searchName: ''
    }
  },
  // 不能直接将事件添加写在input上，因为这样必须焦点在input上才能触发，所以可以直接绑定在document上即可
  created () {
    var lett = this
    document.onkeydown = function (e) {
      var key = window.event.keyCode
      if (key === 13) {
        lett.search()
      }
    }
  },
  methods: {
    search () {
      const searchName = this.searchName.trim()
      if (searchName) {
        // 发布搜索的消息(触发)
        PubSub.publish('search', searchName)
      }
    }
  }
}
</script>

<style>

</style>
