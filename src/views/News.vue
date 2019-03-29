<template>
  <div>
    <ul>
      <li v-for="(news, index) in newArr" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      newArr: ['新闻01', '新闻02', '新闻03', '新闻04', '新闻05']
    }
  }
}
</script>

<style>

</style>
