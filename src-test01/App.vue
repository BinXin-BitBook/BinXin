<template>
  <!-- 根组件包括 html/js/css; 也就是这个vue页面的 templte/script/style  -->
  <div id="app">
  <!-- Test01 -->
    <div style="height: 600px">
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对VUE的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <!-- 第三步: 使用组件标签 -->
          <Add :addComment="addComment"/>
          <List :comments="comments" :deleteComment="deleteComment"/>
        </div>
      </div>
    </div>
    <hr>
    <!-- Test02 -->
    <div>
      <div class="todo-container">
        <div class="todo-wrap">
          <!-- 这种写法也可以 -->
          <todo-header @addTodo="addTodo"/> <!-- 给TodoHeader标签对象绑定自定义的addTodo事件监听 -->
          <todo-list :todos="todos" :deleteTodo="deleteTodo"/>
          <todo-footer :todos="todos" :deletCompleteTodos="deletCompleteTodos" :selectAllTodos="selectAllTodos"/>
        </div>
      </div>
    </div>
    <hr>
    <!--Test03-->
    <div>
      <div v-if="!repoUrl">loading</div>
      <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
    </div>
    <div>
      <img src="./assets/logo.png" style="margin-top: 1000px">
    </div>
    <!-- 第三步: 使用组件标签 -->
    <Test01/>
    <router-view/>
  </div>
</template>
<!--
绑定事件监听 (相当于是订阅消息)
触发事件      (发布消息)
-->
<script>

// 第一步: 引入组件 (注意外面注释必须最左)
import Test01 from './components/Test01.vue'
import Add from './components/test01/Add.vue'
import List from './components/test01/List.vue'
import TodoHeader from './components/test02/TodoHeader.vue'
import TodoList from './components/test02/TodoList.vue'
import TodoFooter from './components/test02/TodoFooter.vue'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      comments: [ // 数据在哪个组件,更新数据的行为(方法)就应该定义在哪个组件
        {
          name: 'BoB',
          content: 'Vue真的太棒啦!!!'
        },
        {
          name: 'Cat',
          content: 'Vue这个做的比较人性化'
        },
        {
          name: 'Dog',
          content: 'Vue还不错'
        }
      ],
      // 从localStorage(存储:保存到文件中)读取todos                           // 如果没有值就解析空数组 []
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]'), // localStorage存储的都是key: value 并且都是文本  window.localStorage.getItem('todos_key')表示JSON格式的字符串
      // Test03
      repoUrl: '',
      repoName: ''
    }
  },
  // 发起异步的操作(Test03)
  mounted () {
  // 发ajax请求获取数据
    const url = 'https://api.github.com/search/repositories?q=vu&sort=stars'
    axios.get(url).then(response => {
    // 成功了
      const result = response.data // 得到受欢迎的repo
      const mostRepo = result.items[0]
      this.repoUrl = mostRepo.html_url
      this.repoName = mostRepo.name
    }).catch(error => {
      alert('请求失败')
      alert(error)
    })
  },
  methods: {
    // 添加评论
    addComment (comment) {
      // 先把数组 comments 找到,再数组的后面添加 comment
      this.comments.unshift(comment)
    },
    // 删除指定下标的评论
    deleteComment (index) {
      this.comments.splice(index, 1)
    },
    // Test02 添加一个Todo对象
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    // 删除所有选中的todo
    deletCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete) // 如果是true则留下所有为true; 过滤产生一个新的数组再返回
    },
    // 全选/全不选
    selectAllTodos (check) {
      // this.todos.forEach(todo => todo.complete = check)
      this.todos.forEach((item, index) => {
        item.complete = check
      })
    }
  },
  // 深度监视
  watch: {
    todos: {
      deep: true, // 代表深度监视
      handler: function (newValue) { // 监视的一个回调函数handler
        // 将todos最新的值 JSON数据,保存到 localStorage
        window.localStorage.setItem('todos_key', JSON.stringify(newValue))
      }
    }
  },
  // 第二步: 映射组件标签(里面注释于里面的对齐; 注意! //空格 内容)
  components: {
    Test01,
    Add,
    List,
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* Test02 */
.todo-container {
    width: 600px;
    margin: auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
