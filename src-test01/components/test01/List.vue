<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复:</h3>
        <h2 v-show="comments.length === 0">暂无评论,点击左侧添加评论!!!</h2>
        <ul class="list-group">
            <Item v-for="(comment, index) in comments" :key="index" :comment="comment" :deleteComment="deleteComment" :index="index"/>
        </ul>
    </div>
</template>

<script>
import Item from './Item.vue'

export default {
// 声明接收属性(外部接收的属性名必须是comments),这个属性就会成为组件对象的属性,模板 template 可以直接读取变量值
  props: ['comments', 'deleteComment'],
  components: {
    Item
  }
}
</script>

<style>
.reply {
    margin-top: 0px;
}
</style>
