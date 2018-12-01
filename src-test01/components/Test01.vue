<template>
    <div>
        <p class="msg"> {{msg}}</p>
    </div>
</template>

<script>
// 配置对象(Vue一致)
export default {
  data () { // 2space
    return { // 4space
      msg: '斌鑫你懂得' // 6space
    }
  }
}
</script>

<style>
    .msg {
        color: red;
        font-size: 30px;
        background: gold;
        width: 300px;
        margin-left:300px;
        height: 50px;
        padding: 40px;
    }
</style>
