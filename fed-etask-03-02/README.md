# ll|Part3|模块二
### 第一题 请简述vue 首次 渲染的过程


1. 首先进行Vue的初始化，初始化Vue的实例成员以及静态成员。
2. 当初始化结束之后，开始调用构造函数，在构造函数中调用this._init()，这个方法相当于我们整个Vue的入口。
3. 在_init()中调用this.$mount()，共有两个this.$mount()。
     第一个this.$mount()是entry-runtime-with-compiler.js入口文件，这个$mount()的核心作用是帮我们把模板编译成render函数，但它首先会判断一下当前是否传入了render选项，如果没有传入的话，它会去获取我们的template选项，如果template选项也没有的话，他会把el中的内容作为我们的模板，然后把模板编译成render函数，它是通过compileToFunctions()函数，帮我们把模板编译成render函数的,当把render函数编译好之后，它会把render函数存在我们的options.render中。
src\platforms\web\entry-runtime-with-compiler.js
4. 如果没有传递render，把模版编译成render函数
compileToFunction()生成render()渲染函数
options.render=render
     第二个this.$mount()是runtime/index.js中的this.$mount()方法，这个方法首先会重新获取el，因为如果是运行时版本的话，是不会走entry-runtime-with-compiler.js这个入口中获取el，所以如果是运行时版本的话，我们会在runtime/index.js的$mount()中重新获取el。
src\platforms\web\runtime\index.js
mountComponent()
5. 接下来调用mountComponent(),mountComponent()是在src/core/instance/lifecycle.js中定义的，在mountComponent()中，首先会判断render选项，如果没有render，但是传入了模板，并且当前是开发环境的话会发送警告，警告运行时版本不支持编译器。接下来会触发beforeMount这个生命周期中的钩子函数，也就是开始挂载之前。
6. 然后定义了updateComponent()，在这个方法中，定义了_render和_update，_render的作用是生成虚拟DOM，_update的作用是将虚拟DOM转换成真实DOM，并且挂载到页面上来。
再接下来就是创建Watcher对象，在创建Watcher时，传递了updateComponent这个函数，这个函数最终是在Watcher内部调用的。在Watcher创建完之后还调用了get方法，在get方法中，会调用updateComponent()。 
7. 然后触发了生命周期的钩子函数mounted,挂载结束，最终返回Vue实例。

### 第二题 vue 响应式原理
Vue 响应式原理其实是在 vm._init() 中实现的，调用程序 initState() –> initData() –> observe() 。observe() 就是响应式的入口函数。

1. observe(value)：这个办法接管一个参数 value ，就是须要解决成响应式的对象；判断 value 是否为对象，如果不是间接返回；判断 value 对象是否有 __ob__ 属性，如果有间接返回；如果没有，创立 observer 对象；返回 observer 对象；

2. Observer：给 value 对象定义不可枚举的 __ob__ 属性，记录以后的 observer 对象；数组的响应式解决，笼罩原生的 push/splice/unshift 等办法，它们会扭转原数组，当这些办法被调用时会发送告诉；对象的响应式解决，调用 walk 办法，遍历对象的每个属性，调用 defineReactive ；

3. defineReactive：为每一个属性创立 dep 对象，如果以后属性的值是对象，再调用 observe ；定义 getter ，收集依赖，返回属性的值；定义 setter ，保留新值，如果新值是对象，调用 observe，派发更新(发送告诉)，调用 dep.notify() ;

4. 依赖收集：在 Watcher 对象的 get 办法中调用 pushTarget 记录 Dep.target 属性；拜访 data 中的成员时收集依赖， defineReactive 的 getter 中收集依赖；把属性对应的 watcher 对象增加到 dep 的 subs 数组中；给 childOb 收集依赖，目标是子对象增加和删除成员时发送告诉；

5. Watcher：dep.notify 在调用 watcher 对象的 update() 办法时，调用 queueWatcher() ，判断 watcher 是否被解决，如果没有的话增加到 queue 队列中，并调用 flushSchedulerQueue() : 触发 beforeUpdate 钩子，调用 watcher.run() , run() –> get() –> getter() –> updateComponent ，清空上一次的依赖，触发 actived 钩子，触发 updated 钩子。

### 简述虚构 DOM 中 Key 的作用和益处。
Key 的作用：
次要用来在虚构 DOM 的 diff 算法中，在新旧节点的比照时分别 vnode ，应用 key 时，Vue 会基于 key 的变动重新排列元素程序，尽可能的复用页面元素，只找出必须更新的DOM，最终能够缩小DOM操作。常见的列子是联合 v-for 来进行列表渲染，或者用于强制替换元素/组件。

设置 Key 的益处：
（1）数据更新时，能够尽可能的缩小DOM操作；
（2）列表渲染时，能够进步列表渲染的效率，进步页面的性能；

### 简述 Vue 中模板编译的过程。
模板编译的过程：

（1）compileToFunctions(template, …)：模板编译的入口函数，先从缓存中加载编译好的 render 函数，如果缓冲中没有，则调用 compile(template, options) 开始编译；

（2）compile(template, options)：先合并选项 options ，再调用 baseCompile(template.trim(), finalOptions) ；compile 的外围是合并 options ，真正解决模板是在 baseCompile 中实现的；

（3）baseCompile(template.trim(), finalOptions)：先调用 parse() 把 template 转换成 AST tree ；而后调用 optimize() 优化 AST ，先标记 AST tree 中的动态子树，检测到动态子树，设置为动态，不须要在每次从新渲染的时候从新生成节点，patch 阶段跳过动态子树；调用 generate() 将 AST tree 生成js代码；

（4）compileToFunctions(template, …)：持续把上一步中生成的字符串模式的js代码转换为函数，调用 createFunction() 通过 new Function(code) 将字符串转换成函数； render 和 staticRenderFns 初始化结束，挂载到 Vue 实例的 options 对应的属性中。


