<template>
  <div class="container">
    <Search/>
    <users-main/>
  </div>
</template>
<!--
绑定事件监听 (相当于是订阅消息)
触发事件      (发布消息)
-->
<script>
import Search from './components/Search'
import Main from './components/Main'

export default {
  components: {
    Search,
    UsersMain: Main // 因为Main不能用,所以起别名
  }
}
</script>

<style>

</style>
