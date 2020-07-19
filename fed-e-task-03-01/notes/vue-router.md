## Hash 模式和History模式的区别

+ Hash模式是基于锚点，以及`onhashchange`事件
+ History模式是基于HTML5中的History API
  + history.pushState() IE10 以后才支持
  + history.replaceState( )

## History 模式的使用
+  History 需要服务器的支持
+  单页应用中，服务器不存在http://jsliu.cn/login 这样的地址会返回找不到该页面
+  在服务器应该除了静态资源外都返回单页应用的index.html

## vueRouter 实现原理

### Hash 模式
+ URL中 # 后面的内容作为路径地址
+ 监听hashchange事件
+ 根据当前路由地址找到对应组件重新渲染

### History 模式
+ 通过history.pushState() 方法改变地址栏
+ 监听popstate事件
+ 根据当前路由地址找到对应组件重新渲染


## 代码
```js
let _Vue =null
export default class VueRouter {
  static install (Vue) {
    //1 判断当前插件是否被安装
    if(VueRouter.install.installed){
      return 
    }
    VueRouter.install.installed=true
    //2 把Vue的构造函数记录在全局
    _Vue=Vue
    //3 把创建Vue的实例传入的router对象注入到Vue实例
    // _Vue.prototype.$router = this.$options.router
    // 通过vue混入
    _Vue.mixin({
      beforeCreate() {
        if(this.$options.router){
          _Vue.prototype.$router = this.$options.router
        }
      },
    })
  }
  constructor(options){
    this.options=options
    this.routeMap={}
    this.data=_Vue.observable({
      current:"/"
    })
    this.init()
  }
  init(){
    this.createRouteMap()
    this.initComponent(_Vue)
    this.initEvent()
}
  createRouteMap(){
     //遍历所有的路由规则 吧路由规则解析成键值对的形式存储到routeMap中
     this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component
  });
  }
  // 实现router-link  router-view
  initComponent(Vue){
    Vue.component("router-link",{
        props:{
            to:String
        },
        render(h){
            return h("a",{
                attrs:{
                    href:this.to
                },
                on:{
                    click:this.clickhander
                }
            },[this.$slots.default])
        },
        methods:{
            clickhander(e){
                history.pushState({},"",this.to)
                this.$router.data.current=this.to
                e.preventDefault()
            }
        }
        // template:"<a :href='to'><slot></slot><>"
    })
    const self = this
    Vue.component("router-view",{
        render(h){
            // self.data.current
            const cm=self.routeMap[self.data.current]
            return h(cm)
        }
    })
    
}
// 解决刷新跟前进后退
initEvent(){
    //
    window.addEventListener("popstate",()=>{
        this.data.current = window.location.pathname
    })
}
}
```