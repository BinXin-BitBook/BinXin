<template>
    <div>
      <p>ID:{{$route.params.id}}</p>
      <ul>
        <li>id:{{messageDetail.id}}</li>
        <li>title:{{messageDetail.title}}</li>
        <li>image:{{messageDetail.image}}</li>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'MessageDetail',
  data () {
    return {
      messageDetail: {
        id: '',
        title: '',
        image: ''
      }
    }
  },
  mounted () {
    setTimeout(() => {
      const allMessageArr = [
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
      this.allMessageArr = allMessageArr // 初始化显示
      const id = this.$route.params.id * 1 // $route代表当前路由,里面存数据
      this.messageDetail = allMessageArr.find(detail => detail.id === id)
    }, 1000)
  },
  watch: {
    $route: function (value) { // 这个函数调用表示路由路径(param)发生改变
      const id = value.params.id * 1
      this.messageDetail = this.allMessageArr.find(detail => detail.id === id) // 更新肯定也能显示
    }
  }
}
</script>

<style>

</style>
