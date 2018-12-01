<template>
    <li class="list-group-item">
        <div class="handle">
            <a href="javascript:;" @click="deleteItem">删除</a>
        </div>
        <p class="user"><span>{{comment.name}}</span><span>说:</span></p>
        <p class="centence">{{comment.content}}</p>
    </li>
</template>

<script>
export default {
// 声明接收属性对象
  props: { // 指定属性名和属性值的类型
    comment: Object,
    deleteComment: Function,
    index: Number
  },
  methods: {
    deleteItem () {
      const {comment, deleteComment, index} = this
      if (window.confirm('确定删除' + comment.name + '的评论吗?')) {
        deleteComment(index)
      }
    }
  }
}
</script>

<style>
li {
    transition: .5s;
    overflow: hidden;
}

.handle {
    widows: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
}

.handle a {
    display: block;
    text-decoration: none;
}

.list-group-item {
    height: 100px;
}
.list-group-item .centence {
    padding: 0px 50px;
}

p {
    margin-top: 0px;
    margin-bottom: 1rem;
}
.user {
    font-size: 22px;
}
</style>
