const fp =require('lodash/fp')

const cars =[
  {name:'Ferrari FF',horsepower:660,dollar_value:700000,in_stock:true},
  {name:'Spyker c12 Zagato',horsepower:650,dollar_value:648000,in_stock:false},
  {name:'Jaguar XKR-S',horsepower:550,dollar_value:132000,in_stock:false},
  {name:'Audi R8',horsepower:525,dollar_value:114200,in_stock:false},
  {name:'Pagani Huayra',horsepower:700,dollar_value:1300000,in_stock:false},
]

//  练习1

let isLastInStock =function(cars){

  let last_car =fp.last(cars)

  return fp.prop('in_stock',last_car)
}
const reverse =arr=>arr.reverse()
const first =arr=>arr[0]
const is=first=>fp.prop('in_stock',first)

 const f= fp.flowRight(is,first,reverse)
console.log( f(cars));

//   练习2
const reverse1 =arr=>arr.reverse()
const fiest1 =arr=>fp.first(arr)
const name=fiest1=>fp.prop('name',fiest1)
const f1=fp.flowRight(name,fiest1,reverse1)
console.log(f1(cars));

// 练习3
let _average =function(xs) {
  return fp.reduce(fp.add,0,xs)/xs.length
}
let averageDollarValue =function (cars){
  let dollar_values=fp.map(function(car){
    return car.dollar_value
  },cars)
  return _average(dollar_values)
}
// console.log(averageDollarValue(cars));
let dollar_values=cars=>fp.map(car=>car.dollar_value,cars)
const f2=fp.flowRight(_average,dollar_values)
console.log(f2(cars));

//练习4
let str =arr=>arr[0]
let _underscore =fp.replace(/\W+/g,'_')
let toLowerCase = str =>str.toLowerCase()
let arr=str=>[str]
let sanitizeNames=fp.flowRight(arr,toLowerCase,_underscore,str)
console.log(sanitizeNames(['Hello World']));



