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

export {}