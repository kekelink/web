## 第一题 Vue 3.0 性能提升主要是通过哪几方面体现的？
1. Vue3使用Proxy对象重写了响应式系统。
2. 编译优化，重写了DOM提高渲染的性能。
+  Vue.js 2.x中通过标记静态根节点，优化diff的过程

+ Vue.js 3.0 中标记和提升所有的静态根节点，diff的时候只需要对比动态节点内容
  + Fragments（升级vetur插件）
  + 静态提升
  + Patch flag
  + 缓存事件处理函数
3. 源码体积的优化
 + Vue.js 3.0中移除了一些不常用的API 、inline-template、filter等
 + Vue3中的没用到的模块不会被打包，但是核心模块会打包。Keep-Alive、transition等都是按需引入的。
## 第二题 Vue 3.0 所采用的 Composition Api 与 Vue 2.x使用的Options Api 有什么区别？
+ Composition Api 
  + 是基于函数的api
  + 可以更灵活的组织组件的逻辑
+ Options Api 
  + 包含一个描述组件选项(data、methods、props等)的对象
  + Options API 开发复杂组件，同一个功能逻辑的代码被拆分到不同选项
## 第三题 Proxy 相对于 Object.defineProperty 有哪些优点？
+ 可监听动态新增的属性
+ 可以监听删除的属性
+ 可以监听数组的索引和length属性
+ 可以作为单独的模块单独使用

## Vue 3.0 在编译方面有哪些优化？
+ Vue.js 3.0 中标记和提升所有的静态根节点，diff的时候只需要对比动态节点内容
 + Fragments（升级vetur插件）
 + 静态提升
 + Patch flag
 + 缓存事件处理函数

## Vue.js 3.0 响应式系统的实现原理？

使用 Proxy重写响应式
通过 effect 声明依赖响应式数据的函数cb ( 例如视图渲染函数render函数)，并执行cb函数，执行过程中，会触发响应式数据 getter
在响应式数据 getter中进行 track依赖收集：建立 数据&cb 的映射关系存储于 targetMap
当变更响应式数据时，触发 trigger ，根据 targetMap 找到关联的cb执行
映射关系 targetMap 