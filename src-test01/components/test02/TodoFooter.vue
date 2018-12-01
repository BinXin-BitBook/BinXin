<template>
    <div class="todo-footer">
    <label>
        <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
        <span>已完成{{completeSum}}</span> / 全部{{todos.length}}
    </span>
      <button class="btn btn-danger" v-show="completeSum" @click="deletCompleteTodos">清除已完成的任务</button>
    </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    deletCompleteTodos: Function,
    selectAllTodos: Function
  },
  // 计算属性
  computed: {
    completeSum () {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },
    // 注意!!! 这个相互监听的 set/get
    isAllCheck: {
      get () { // 读函数属性值,所以不需要加括号
        return this.completeSum === this.todos.length && this.completeSum > 0
      },
      set (value) { // value是当前checkbox最新值; value值Boolean类型
        this.selectAllTodos(value)
      }
    }
  }
}
</script>

<style>
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}
.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}
.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}
.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>
