# vue_demo

> A Vue.js project

Vue初学者的记录
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

第一部分 git 的一些常用命令

//1.添加上游仓库信息
git remote add upstream http://10.12.15.230/development/XXX.git 

//2.添加上游仓库的分支信息到本地仓库
git fetch upstream

//3.新建本地分支，追踪上游仓库的itamcs分支
git checkout --track upstream/itamcs

//4.新建本地分支，追踪上游仓库的oa分支
git checkout --track upstream/oa

//5.删除默认的master分支
git branch -d master

//6.新建本地分支，追踪上游仓库的master分支
git checkout --track upstream/master

//7.查看所有分支信息
git branch -a

//8.创建本地分支并在远程同步创建
git checkout -b dev origin/dev

//9.更改当前分支的跟踪分支(将当前分支跟踪远程库(upstream)的分支(master)
git branch -u upstream/master

//10.更改其他分支的跟踪分支
git branch -u upstream/master master

//11.查看本地分支跟踪信息
git branch -vv
//12.查看远程分支信息
git remote -vv

//13.如果本地代码，已经关联了远程分支，则需要先解除关联 (注意!!!)
git remote remove origin


