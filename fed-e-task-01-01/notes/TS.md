# 什么是TypeScript
TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。
# 为什么选择TypeScript
 JavaScript是一门弱类型/动态类型脚本语言。过于灵活，没有类型检查。在大型项目中代码越来越复杂，JavaScript这种灵活的优势就变成了短板
## TypeScript 增加了代码的可读性和可维护性
+ 类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了
+ 可以在编译阶段就发现大部分错误，这总比在运行时候出错好
+ 增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等
## TypeScript 非常包容
+ TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可
+ 即使不显式的定义类型，也能够自动做出类型推论
+ 可以定义从简单到复杂的几乎一切类型
+ 即使 TypeScript 编译报错，也可以生成 JavaScript 文件
+ 兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取
## TypeScript 的缺点
+ 有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念
+ 可能和一些库结合的不是很完美 
+ 对于小型项目会有额外的开发成本
# 安装、使用TypeScript
TypeScript 的命令行工具安装方法如下：
```js
npm install -g typescript
```
以上命令会在全局环境下安装 tsc 命令，安装完成之后，我们就可以在任何地方执行 tsc 命令了。
> 注意：mac 的话 需要加上`sudo`
```js
sudo npm install -g typescript
```
Hello TypeScript

首先创建一个`01-ts.ts`.ts文件

将以下代码复制到 01-ts.ts 中：
```js
const hello = name => {
  console.log(`hello, ${name}`)

}
hello ('TS')
```
然后执行
```node
tsc 01-ts.ts
```
这时候会生成一个编译好的文件  01-ts.ts：
```js
var hello = function (name) {
    console.log("hello, " + name);
};
hello('TS');

```
TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以。

上述例子中，我们用 : 指定name 参数类型为 string。但是编译为 js 之后，并没有什么检查的代码被插入进来。

**TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。**
```js
const hello = (name:string) => {
  console.log(`hello, ${name}`)

}
hello (1)
```

编辑器中会提示错误，编译的时候也会出错：
```js
01-ts.ts:5:8 - error TS2345: Argument of type '1' is not assignable to parameter of type 'string'.

5 hello (1)
         ~
```
就算出现错误还是会生成js文件：
```js
var hello = function (name) {
    console.log("hello, " + name);
};
hello(1);

```
# TypeScript 配置文件

开始使用 tsconfig.json 是一件比较容易的事，你仅仅需要写下：
```json
{}
```
或者使用 `tsc --init`创建tsconfig.json

在项目的根目录下创建一个空 JSON 文件。通过这种方式，TypeScript 将 会把此目录和子目录下的所有 .ts 文件作为编译上下文的一部分，它还会包含一部分默认的编译选项。
## 编译选项
你可以通过 compilerOptions 来定制你的编译选项：
```json
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}
```
配置文件配好后 就可以直接使用`tsc` 进行编译
# TypeScript 作用域问题
在默认情况下，当你开始在一个新的 TypeScript 文件中写下代码时，它处于全局命名空间中。如在 foo.ts 里的以下代码。
```ts
const foo = 123;
```
如果你在相同的项目里创建了一个新的文件 bar.ts，TypeScript 类型系统将会允许你使用变量 foo，就好像它在全局可用一样：
```ts
const bar = foo; // allowed
```
毋庸置疑，使用全局变量空间是危险的，因为它会与文件内的代码命名冲突。我们推荐使用下文中将要提到的文件模块

解决这个我们只需要在文件最后 使用`export {}` 这样每个文件就是一个模块，单独的作用域
# TypeScript 基础
## TypeScript 原始数据类型
```ts
// 数字，二、八、十六进制都支持
let num:number =0
let num2:number=0xf00a

// 字符串
let v:string="a"
//let name:string="liu"
// 这里会提示 'name' was also declared here 
// 原因是在默认状态下，typescript 将 DOM typings 作为全局的运行环境，所以当我们声明 name时， 与 DOM 中的全局 window 对象下的 name 属性出现了重名。
// const a:string=null 
// 这里是在tsconfig.json 配置了严格模式 "strict": true  改成false 就好了

const c:boolean=false
// void只能存放null/undefined 注意：在严格模式下只能是 undefined
const d:void=undefined

const f:null=null

const g:undefined=undefined
// 这里报错 'Symbol' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the `lib` compiler option to es2015 or later.
//是因为Symbol是es2015才有的  ts使用的标准库没有  在tsconfig.json设置  "lib": ["es2015","DOM"]
//以后遇到内置方法报错的时候可能就是标准库的关系 在在tsconfig.json设置  "lib" 就好了
const h:symbol=Symbol()


```
## TypeScript Object类型
```ts
const foo:object =  {}//可以是 function (){} //[]//{}
const obj:{foo:number,bar:string}={foo:1,bar:'w'}
// 这里只是简单的定义，跟专业的需要用接口来定义 
export { } //确保跟其他成员没有冲突
```
## TypeScript 数组类型
```ts
// 写法1
const arr1:Array<number>=[1,2,3]
// 写法2
const arr2:number[]=[1,2,3]

let arr3:string[] = ["1","2"]
let arr4:Array<string> = ["1","2"]

// 小案例
// 如果是 JS，需要判断是不是每个成员都是数字
// 使用 TS，类型有保障，不用添加类型判断
function sum (...args: number[]) {
  return args.reduce((prev, current) => prev + current, 0)
}

sum(1, 2, 3) // => 6
```
##  TypeScript 元组类型
```ts
// 元组（Tuple）

export {} // 确保跟其它示例没有成员冲突

const tuple: [number, string] = [18, 'zce']

// const age = tuple[0]
// const name = tuple[1]

const [age, name] = tuple

// ---------------------

const entries: [string, number][] = Object.entries({
  foo: 123,
  bar: 456
})

const [key, value] = entries[0]
// key => foo, value => 123
```

## TypeScript 枚举类型
枚举是对JavaScript标准数据类型集的扩充，常被用来限定在一定范围内取值的场景,如一周只能有七天，颜色限定为红绿蓝等。串的枚举。我们可以用enum来实现。

### 简单例子

```ts
// 枚举
//  注意 enum 是采用  = 赋值

// enum PostStatus {
//   Draft = 0,
//   Unpublished = 1,
//   Published = 2
// }

// 字符串枚举
// enum PostStatus {
//   Draft = "a",
//   Unpublished = "b",
//   Published = "c"
// }

//----------------------------
//  可以不用赋值 默认从0开始

// enum PostStatus {
//   Draft , //0
//   Unpublished , //1
//   Published  //2
// }

//----------------------------
//  给第一个赋值 后面的会在第一个基础上自加

// enum PostStatus {
//   Draft =6, //6
//   Unpublished , //7
//   Published  //8
// }



```
### 常量枚举
```ts
// 常量枚举
const enum PostStatus {
  Draft , //0
  Unpublished , //1
  Published  //2
}
const post ={
status:PostStatus.Draft
}
// 编译后
var post = {
    status: 1 /* Draft */
};
```
> 我通常用 = 1 初始化，因为在枚举类型值里，它能让你做一个安全可靠的检查。
## TypeScript 函数类型

```ts
//  简单案例

// function func1 (a: number, b: number): string {
//   return 'func1'
// }

// func1(100, 200)


//  默认值或者可以选参数
// b: number=1 // b?: number 问号标示可选
// function func1 (a: number, b: number=1): string {
//   return 'func1'
// }

// func1(100, 200)

//  任意个数的参数 使用es6扩展运算符

// function func1 (...res:number): string {
//   return 'func1'
// }

// func1(100, 200)
```
## TypeScript 任意(any)类型
```ts
// 任意类型（弱类型）

export {} // 确保跟其它示例没有成员冲突

function stringify (value: any) {
  return JSON.stringify(value)
}

stringify('string')

stringify(100)

stringify(true)

let foo: any = 'string'

foo = 100

foo.bar()

// any 类型是不安全的

```
##  TypeScript 隐式类型推断
如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
### 案列
```ts
let foo = 123; // foo 是 'number'
let bar = 'hello'; // bar 是 'string'

foo = bar; // Error: 不能将 'string' 赋值给 `number`

//数组
const bar = [1, 2, 3];
bar[0] = 'hello'; // Error：不能把 'string' 类型赋值给 'number' 类型

//对象
const foo = {
  a: 123,
  b: 456
};

foo.a = 'hello'; // Error：不能把 'string' 类型赋值给 'number' 类型
```
> 建议尽量每个变量都添加明确的类型，便于后期更直观的理解代码
### 注意
#### 小心使用参数
如果类型不能被赋值推断出来，类型也将不会流入函数参数中。例如如下的一个例子，编译器并不知道 foo 的类型，所它也就不能推断出 a 或者 b 的类型。
```ts
const foo = (a, b) => {
  /* do something */
};
```
然而，如果 foo 添加了类型注解，函数参数也就能被推断（a，b 都能被推断为 number 类型）：
```ts
type TwoNumberFunction = (a: number, b: number) => void;
const foo: TwoNumberFunction = (a, b) => {
  /* do something */
};
```
#### 小心使用返回值
尽管 TypeScript 一般情况下能推断函数的返回值，但是它可能并不是你想要的。例如如下的 foo 函数，它的返回值为 any：
```ts
function foo(a: number, b: number) {
  return a + addOne(b);
}

// 一些使用 JavaScript 库的特殊函数
function addOne(a) {
  return a + 1;
}
```
这是因为返回值的类型被一个缺少类型定义的 addOne 函数所影响（a 是 any，所以 addOne 返回值为 any，foo 的返回值是也是 any）。
# TypeScript 进阶
## TypeScript 类型断言
在某些情况TS无法检测出类型，需要你告诉它。TypeScript 类型断言用来告诉编译器你比它更了解这个类型，并且它不应该再发出错误
```ts
// 类型断言

export {} // 确保跟其它示例没有成员冲突

// 假定这个 nums 来自一个明确的接口
const nums = [110, 120, 119, 112]

const res = nums.find(i => i > 0)

//  res  TypeScript 是不知道是什么类型的 所有需要你告诉它
// const square = res * res

// 推荐使用 as
const num1 = res as number

const num2 = <number>res // JSX 下不能使用
```
> 注意： 类型断言不是类型转换，是因为转换通常意味着某种运行时的支持。但是，类型断言纯粹是一个编译时语法，同时，它也是一种为编译器提供关于如何分析代码的方法。

## TypeScript 接口
在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
### 简单案例
```ts
// 接口
interface Post {
  title:string
  content:string
}
// 使用接口
function printPost (post: Post) {
  console.log(post.title)
  console.log(post.content)
  
}
printPost({title:'234',content:'23'})

```
### 可选成员/只读成员/任意成员
```ts

//  ? 标示可选
// interface Post {
//   title:string
//   content:string,
//   subtitle?:string
// }
// // 使用接口
// function printPost (post: Post) {
//   console.log(post.title)
//   console.log(post.content)
  
// }

//  readonly 只读
interface Post {
  title:string
  content:string,
  subtitle?:string,
  readonly sun:string
}
// 使用接口
function printPost (post: Post) {
  console.log(post.title)
  console.log(post.content)
  
}


//  任意类型的属性
interface Post {
  [prop:string]:string
}
// 使用接口
const cache:Post={
  name:'sdffs',
  title:'s'
}

```

##  TypeScript 类的使用

### 简单例子
```ts
export { }
class Person {
  // 首先先定义类型
  name: string
  age: string
  constructor(name: string, age: string) {

    this.name = name
    this.age = age
  }
  sayHi(msg:string):void{
    console.log(`${this.name}${msg}`);
    
  }

}
```
### 类的访问修饰符

+ private : 私有
+ public :公共
+ protected :受保护的

```ts
class Person {
  // 首先先定义类型
  public name: string //公共
  private age: string // 私有
  protected gender: string //
  constructor(name: string, age: string) {

    this.name = name
    this.age = age
    this.gender = 'sss'
  }
  sayHi(msg: string): void {
    console.log(`${this.name}${msg}`);

  }

}

class Student extends Person {
  constructor(name: string, age: string) {
    super(name, age)
    console.log(this.gender) // 可以访问到

  }

}
const tom = new Person('tom', '18')
// console.log(tom.age); //访问不到
// console.log(tom.gender); //也访问不到

```
constructor 加修饰符

```ts
class Student extends Person {
  private constructor (name: string, age: number) {
    super(name, age)
    console.log(this.gender)
  }

  static create (name: string, age: number) {
    return new Student(name, age)
  }
}

const tom = new Person('tom', 18)
console.log(tom.name)
// console.log(tom.age)
// console.log(tom.gender)
 //不能直接通过 new来创造对象
const jack = Student.create('jack', 18)

```
### 只读属性
```ts
使用`readonly`来定义只读，如果有修饰符的话 跟在修饰符后面
class Person {
  // 首先先定义类型
  public name: string //公共
  private age: string // 私有
  // 只读成员 readonly
  protected readonly gender: boolean
  constructor(name: string, age: string) {

    this.name = name
    this.age = age
    this.gender = 'sss'
  }
  sayHi(msg: string): void {
    console.log(`${this.name}${msg}`);

  }

}
```
### 类与接口
实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。


举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它：
```ts

export{}
//  先定义接口
 interface Eat {
  //  定义方法类型
  eat (food:string):void 
 }
 interface Run {
  //  定义方法类型
  run (distance:string):void 
 }
 class Person implements Eat,Run{
   eat(food:string):void{
    console.log(food);
    
   }
   run (distance:string):void {
    console.log(distance);
   }
 }
```
### 抽象类
使用`abstract`来定义 抽象类
```ts
abstract class Animal {
  eat (food: string): void {
    console.log(`呼噜呼噜的吃: ${food}`)
  }
    // 抽象方法不需要方法体
  abstract run (distance: number): void
}

class Dog extends Animal {
  run(distance: number): void {
    console.log('四脚爬行', distance)
  }

}

const d = new Dog()
d.eat('嗯西马')
d.run(100)
```
不能直接通过 new Animal() 创建实例
## TypeScript泛型
泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

```ts
// 泛型

export {} // 确保跟其它示例没有成员冲突

function createNumberArray (length: number, value: number): number[] {
  const arr = Array<number>(length).fill(value)
  return arr
}

function createStringArray (length: number, value: string): string[] {
  const arr = Array<string>(length).fill(value)
  return arr
}

function createArray<T> (length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value)
  return arr
}

// const res = createNumberArray(3, 100)
// res => [100, 100, 100]

const res = createArray<string>(3, 'foo')
```

## 类型声明
有一些三方的库 引入不知道是什么类型 可以使用`declare`lai 声明类型  

还有些第三方库会有专门的类型声明文件

```ts 
import { camelCase } from 'lodash'
import qs from 'query-string'

qs.parse('?key=value&key2=value2')

// declare function camelCase (input: string): string

const res = camelCase('hello typed')
```