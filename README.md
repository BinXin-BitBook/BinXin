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

第二部分 JS自己的一些记录

=====================JS==========================
1.JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true，因此上述代码条件判断的结果是true。
2.如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined。
3.由于JavaScript的函数也是一个对象，上述定义的abs()函数实际上是一个函数对象，而函数名abs可以视为指向该函数的变量。
4.arguments关键字
	JavaScript还有一个免费赠送的关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。arguments类似Array但它不是一个Array

5.利用arguments，你可以获得调用者传入的所有参数。也就是说，即使函数不定义任何参数，还是可以拿到参数的值
	function abs() {
		if (arguments.length === 0) {
			return 0;
		}
		var x = arguments[0];
		return x >= 0 ? x : -x;
	}
	abs(); // 0
	abs(10); // 10
	abs(-9); // 9
6.由于JavaScript函数允许接收任意个参数，于是我们就不得不用arguments来获取所有参数
	function foo(a, b) {
		var i, rest = [];
		if (arguments.length > 2) {
			for (i = 2; i<arguments.length; i++) {
				rest.push(arguments[i]);
			}
		}
		console.log('a = ' + a);
		console.log('b = ' + b);
		console.log(rest);
	}
	foo('1','2','3','4','5')
	a = 1
	b = 2
	["3", "4", "5"] // 获取到传入函数的其他的参数
为了获取除了已定义参数a、b之外的参数，我们不得不用arguments，并且循环要从索引2开始以便排除前两个参数，这种写法很别扭，只是为了获得额外的rest参数
7.要小心了，由于JavaScript引擎在行末自动添加分号的机制，上面的代码实际上变成了
	function foo() {
		return        // 自动添加了分号，相当于return undefined;
			{ name: 'foo' };
	}
	foo(); // undefined
8.这说明JavaScript的函数在查找变量时从自身函数定义开始，从“内”向“外”查找。如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量。
9.由于JavaScript的这一怪异的“特性”，我们在函数内部定义变量时，请严格遵守“在函数内部首先申明所有变量”这一规则。最常见的做法是用一个var申明函数内部用到的所有变量
10.不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定到window的一个属性
11.进一步大胆地猜测，我们每次直接调用的alert()函数其实也是window的一个变量	
12.为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量
13.ES6标准引入了新的关键字const来定义常量，const与let都具有块级作用域
14.在一个方法内部，this是一个特殊变量，它始终指向当前对象，也就是xiaoming这个变量。所以，this.birth可以拿到xiaoming的birth属性。	
15.如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，也就是xiaoming，这是符合我们预期的。
	如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window。
	坑爹啊！	
16.修复的办法也不是没有，我们用一个that变量首先捕获this：
	var xiaoming = {
		name: '小明',
		birth: 1990,
		age: function () {
			var that = this; // 在方法内部一开始就捕获this
			function getAgeFromBirth() {
				var y = new Date().getFullYear();
				return y - that.birth; // 用that而不是this
			}
			return getAgeFromBirth();
		}
	};
	xiaoming.age(); // 25
用var that = this;，你就可以放心地在方法内部定义其他函数，而不是把所有语句都堆到一个方法中。	
17.如果不需要立刻求和，而是在后面的代码中，根据需要再计算怎么办？可以不返回求和的结果，而是返回求和的函数！
	function lazy_sum(arr) {
		var sum = function () {
			return arr.reduce(function (x, y) {
				return x + y;
			});
		}
		return sum;
	}
	1).当我们调用lazy_sum()时，返回的并不是求和结果，而是求和函数：
		var f = lazy_sum([1, 2, 3, 4, 5]); // function sum()
	2).调用函数f时，才真正计算求和的结果：
		f(); // 15
在这个例子中，我们在函数lazy_sum中又定义了函数sum，并且，内部函数sum可以引用外部函数lazy_sum的参数(arr)和局部变量，当lazy_sum返回函数sum时，相关参数和变量都保存在返回的函数(sum函数)中，这种称为“闭包（Closure）”的程序结构拥有极大的威力。
	请再注意一点，当我们调用lazy_sum()时，每次调用都会返回一个新的函数，即使传入相同的参数：
	var f1 = lazy_sum([1, 2, 3, 4, 5]);
	var f2 = lazy_sum([1, 2, 3, 4, 5]);
	f1 === f2; // false
	f1()和f2()的调用结果互不影响。
18.箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj	
