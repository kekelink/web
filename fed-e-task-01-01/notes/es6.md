#  let/const 与块级作用域
**var和let/const的区别**


+ 块级作用域


+ 不存在变量提升


+ 暂时性死区


+ 不可重复声明


+ let、const声明的全局变量不会挂在顶层对象下面


**const命令两个注意点:**


+ const 声明之后必须马上赋值，否则会报错


+ const 简单类型一旦声明就不能再更改，复杂类型(数组、对象等)指针指向的地址不能更改，内部数据可以更改。
```js
const num = 0
const obj ={}
obj.name='a' // 是可以的
num=2 //不允许 会报错
```


下面的代码如果使用var，最后输出的是10。
```js
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```
上面代码中，变量`i`是`var`命令声明的，在全局范围内都有效，所以全局只有一个变量`i`。每一次循环，变量`i`的值都会发生改变，而循环内被赋给数组a的函数内部的`console.log(i)`，里面的`i`指向的就是全局的`i`。也就是说，所有数组a的成员里面的`i`，指向的都是同一个`i`，导致运行时输出的是最后一轮的i的值，也就是 10。
使用闭包解决
```js
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = (function (i) {
     return function(){ console.log(i)}
  })(i)
}
a[6](); // 6

```

使用`let`，声明的变量仅在块级作用域内有效，最后输出的是 6。
```js
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6

```
上面代码中，变量`i`是`let`声明的，`let`是块级作用域,所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。

另外，for循环还有一个特别之处，for 循环会产生两层作用域
```js

 for (let i = 0; i < 3; i++) {
  let i = 'foo'
  console.log(i) //foo 打印3次
 }
```
这样可能不好理解，这里可以吧循环拆解开，用if来演示就明白了
```js
let i=0
if(i<3){
    let i = 'foo'
     console.log(i)
}
i++

if(i<3){
    let i = 'foo'
     console.log(i)
}
i++


if(i<3){
    let i = 'foo'
     console.log(i)
}
i++

```
从这里你就可以看出，let i= 'foo' 是内部变量 跟外部的let i= 0 是互不影响的

# 解构赋值
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
## 数组的解构
简单写法
```js
let [a, b, c] = [1, 2, 3];

```
只想要某一个解构
```js
const arr = [100, 200, 300]
 const [, , baz] = arr
 console.log(baz)
```
给解构设置默认值
```js
const arr = [100, 200, 300]
 const [foo, bar, baz = 123, more = 'default value'] = arr
 console.log(bar, more) //123  default value
```
需要注意的是，如果只解构一个默认是取第一个值解构，如果是没解构到默认就是 `undefined`
## 对象的解构
对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
```js
const obj = { name: 'zce', age: 18 }

 const { name } = obj
 console.log(name)


```
需要注意的事，当外部有同名的时候会报错，这里就可以使用重命名的方式解决
```js
 const name = 'tom'
 const { name: objName } = obj
 console.log(objName)
// 待默认值
 const name = 'tom'
 const { name: objName = 'jack' } = obj
 console.log(objName)
```
# 模板字符串
模板字符串
（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
```js
// 反引号包裹
// const str = `hello es2015, this is a string`

// 允许换行
// const str = `hello es2015,

// this is a \`string\``

// console.log(str)

const name = 'tom'
// 可以通过 ${} 插入表达式，表达式的执行结果将会输出到对应位置
const msg = `hey, ${name} --- ${1 + 2} ---- ${Math.random()}`
console.log(msg)
```
## 带标签的模版字符串
```js

// 带标签的模板字符串

// 模板字符串的标签就是一个特殊的函数，
// 使用这个标签就是调用这个函数
// const str = console.log`hello world`

const name = 'tom'
const gender = false

function myTagFunc (strings, name, gender) {
  // console.log(strings, name, gender)
  // return '123'
  const sex = gender ? 'man' : 'woman'
  return strings[0] + name + strings[1] + sex + strings[2]
}

const result = myTagFunc`hey, ${name} is a ${gender}.`

console.log(result) // hey,tom is a true.
```
标签函数 类似于vue中的过滤器。把模版字符串进行加工。。。
# 字符串扩展方法
+ includes()
+ startsWith()
+ endsWith()
```js
const message = 'Error: foo is not defined.'

console.log(
  // message.startsWith('Error') // 是否以Error开头
  // message.endsWith('.') // 是否以.结尾
  message.includes('foo') // 是否包含某个内容
)
```
# ...操作符
取代`arguments`
```js
// 剩余参数

// function foo () {
//   console.log(arguments)
// }

function foo (first, ...args) {
  console.log(args) // [2,3,4]
}

foo(1, 2, 3, 4)
```
展开数组参数
```js
// 展开数组参数

const arr = ['foo', 'bar', 'baz']

// console.log(
//   arr[0],
//   arr[1],
//   arr[2],
// )

// console.log.apply(console, arr)

console.log(...arr)
```
# 箭头函数
使用箭头函数可以让代码更简洁
```js
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};

```
箭头函数不会改变this的指向,this指向当前作用域。箭头函数是不会产生作用域
```js
// 箭头函数与 this
// 箭头函数不会改变 this 指向

const person = {
  name: 'tom',
  // sayHi: function () {
  //   console.log(`hi, my name is ${this.name}`)
  // }
  sayHi: () => {
    console.log(`hi, my name is ${this.name}`) 
  },
  sayHiAsync: function () {
    // const _this = this
    // setTimeout(function () {
    //   console.log(_this.name)
    // }, 1000)

    console.log(this)
    setTimeout(() => {
      // console.log(this.name)
      console.log(this)
    }, 1000)
  }
}

person.sayHiAsync()
```
箭头函数有几个使用注意点。

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。

# 对象扩展
## Object.assign
可以用来合并两个对象
```js
let obj = {
  a: 123,
  b: 123
}
let obj2 = {
  c: 345,
  d: 345
}
let obj3 = Object.assign(obj, obj2)
console.log(obj3) //{a: 123, b: 123, c: 345, d: 345}
```
Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。

# Proxy
首先Proxy的语法是:
```js
let p = new Proxy(target, handler);
```
其中:

+ target是你要代理的对象.它可以是JavaScript中的任何合法对象.如: (数组, 对象, 函数等等)


+ handler是你要自定义操作方法的一个集合.


+ p是一个被代理后的新对象,它拥有target的一切属性和方法.只不过其行为和结果是在handler中自定义的.
案例：
```js
let obj = {
  a: 1,
  b: 2,
}

const p = new Proxy(obj, {
  get(target, key, value) {
    if (key === 'c') {
      return '我是自定义的一个结果';
    } else {
      return target[key];
    }
  },

  set(target, key, value) {
    if (value === 4) {
      target[key] = '我是自定义的一个结果';
    } else {
      target[key] = value;
    }
  }
})

console.log(obj.a) // 1
console.log(obj.c) // undefined
console.log(p.a) // 1
console.log(p.c) // 我是自定义的一个结果

obj.name = '李白';
console.log(obj.name); // 李白
obj.age = 4;
console.log(obj.age); // 4

p.name = '李白';
console.log(p.name); // 李白
p.age = 4;
console.log(p.age); // 我是自定义的一个结果


```
从上面这段代码中,我可以很清楚的看到Proxy对象的作用.即是之前所受的用于定义基本操作的自定义行为.同样的get和set操作.没有没代理的对象所得的结果是其JavaScript本身的执行机制运行计算后所得到的.而被代理了的对象的结果则是我们自定义的.


在上面代码中,我们看到了构造一个代理对象时所传的第二个参数handler,这个handler对象是由get和set两个函数方法组成的.这两个方法会在一个对象被get和set时被调用执行,以代替原生对象上的操作.那么为什么在handler,定义get和set这两个函数名之后就代理对象上的get和set操作了呢?
实际上handler本身就是ES6所新设计的一个对象.它的作用就是用来自定义代理对象的各种可代理操作。它本身一共有13中方法,每种方法都可以代理一种操作.其13种方法如下:

```js
andler.getPrototypeOf()

// 在读取代理对象的原型时触发该操作，比如在执行 Object.getPrototypeOf(proxy) 时。

handler.setPrototypeOf()

// 在设置代理对象的原型时触发该操作，比如在执行 Object.setPrototypeOf(proxy, null) 时。

handler.isExtensible()

// 在判断一个代理对象是否是可扩展时触发该操作，比如在执行 Object.isExtensible(proxy) 时。

handler.preventExtensions()

// 在让一个代理对象不可扩展时触发该操作，比如在执行 Object.preventExtensions(proxy) 时。

handler.getOwnPropertyDescriptor()

// 在获取代理对象某个属性的属性描述时触发该操作，比如在执行 Object.getOwnPropertyDescriptor(proxy, "foo") 时。

handler.defineProperty()

// 在定义代理对象某个属性时的属性描述时触发该操作，比如在执行 Object.defineProperty(proxy, "foo", {}) 时。

handler.has()

// 在判断代理对象是否拥有某个属性时触发该操作，比如在执行 "foo" in proxy 时。

handler.get()

// 在读取代理对象的某个属性时触发该操作，比如在执行 proxy.foo 时。

handler.set()

// 在给代理对象的某个属性赋值时触发该操作，比如在执行 proxy.foo = 1 时。

handler.deleteProperty()

// 在删除代理对象的某个属性时触发该操作，比如在执行 delete proxy.foo 时。

handler.ownKeys()

// 在获取代理对象的所有属性键时触发该操作，比如在执行 Object.getOwnPropertyNames(proxy) 时。

handler.apply()

// 在调用一个目标对象为函数的代理对象时触发该操作，比如在执行 proxy() 时。

handler.construct()

// 在给一个目标对象为构造函数的代理对象构造实例时触发该操作，比如在执行new proxy() 时。

```
# Reflect
将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法

Reflect:
```js
Reflect.apply
Reflect.construct
Reflect.defineProperty
Reflect.deleteProperty
Reflect.enumerate // 废弃的
Reflect.get
Reflect.getOwnPropertyDescriptor
Reflect.getPrototypeOf
Reflect.has
Reflect.isExtensible
Reflect.ownKeys
Reflect.preventExtensions
Reflect.set
Reflect.setPrototypeOf
```

# Promise
Promise 是异步编程的一种解决方案，比传统的异步解决方案【回调函数】和【事件】更合理、更强大

```js
Promise.prototype.then()
Promise.prototype.catch()
Promise.prototype.finally()
Promise.all()
Promise.race()
Promise.allSettled()
Promise.any()
Promise.resolve()
Promise.reject()
```

# class
class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已
```js

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```