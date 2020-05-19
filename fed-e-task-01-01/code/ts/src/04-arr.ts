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