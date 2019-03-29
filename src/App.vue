<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link to="/home" class="list-group-item">Home</router-link>
          <router-link to="/about" class="list-group-item  router-link-exact-active">About</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--
绑定事件监听 (相当于是订阅消息)
触发事件      (发布消息)
-->
<script>
export default {
}
</script>

<style>

</style>
