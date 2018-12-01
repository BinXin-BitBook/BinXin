<template>
  <div>
    <ul>
      <li v-for="message in messageArr" :key="message.id">
          {{message.image}}
        <a href="#">{{message.title}}</a>
        <router-link :to="'/home/message/detail/'+message.id">{{message.image}}</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Message',
  data () {
    return {
      messageArr: []
    }
  },
  mounted () {
    // 模拟ajax请求从后台获取数据
    setTimeout(() => {
      const messageArr = [
        {
          id: 1,
          title: '文本数据01',
          image: '图片数据01'
        },
        {
          id: 2,
          title: '文本数据02',
          image: '图片数据02'
        },
        {
          id: 3,
          title: '文本数据03',
          image: '图片数据03'
        },
        {
          id: 4,
          title: '文本数据04',
          image: '图片数据04'
        },
        {
          id: 5,
          title: '文本数据05',
          image: '图片数据05'
        }
      ]
      this.messageArr = messageArr
    }, 1000)
  }
}
</script>

<style scoped>

</style>
