# ll|Part3|模块一
### 第一题
 1. 动态给data增加的成员不是响应式的 
 2. 
### 第二题
+ diff 的过程就是调用名为 patch 的函数，比较新旧节点，一边比较一边给真实的 DOM 打补丁。
+ patch 函数接收两个参数 oldVnode 和 Vnode 分别代表新的节点和之前的旧节点,这个函数会比较 oldVnode 和 vnode 是否是相同的, 即函数 sameVnode(oldVnode, vnode), 根据这个函数的返回结果分如下两种情况：
  + true：则执行 patchVnode
  + false：则用 vnode 替换 oldVnode
+ patchVnode 这个函数做了以下事情：
  + 找到对应的真实 dom，称为 el
  + 判断 vnode 和 oldVnode 是否指向同一个对象，如果是，那么直接 return
  + 如果他们都有文本节点并且不相等，那么将 el 的文本节点设置为 vnode 的文本节点。
  + 如果 oldVnode 有子节点而 vnode 没有，则删除 el 的子节点
  + 如果 oldVnode 没有子节点而 vnode 有，则将 vnode 的子节点真实化之后添加到 el
  + 如果两者都有子节点，则执行 updateChildren 函数比较子节点


### 第三题
 /fed-e-task-03-01/code/vue-router-task/src/vuerouter/index.js

### 第四题
fed-e-task-03-01/code/vue-html-on
### 第五题
