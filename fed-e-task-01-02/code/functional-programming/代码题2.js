const fp =require('lodash/fp')
const {Maybe,Container} = require('./support')
// 练习1
let maybe =Maybe.of([5,6,1])
// maybe.map((val)=>{
//   console.log(val);
  
// })

let ex1 = (num)=>maybe.map(function(arr){
  return fp.map((item)=>{ 
    return fp.add(item,num)
  },arr)
})
// let ex1= maybe=>{
//  return  function(num){
//   return fp.map((item)=>{ 
//     return fp.add(item,num)
//   },maybe._value)
//  }
// }
console.log(ex1(1)._value);

// fp.add()


// 练习2
let xs=Container.of(['do','ray','me','fa','so','la','ti','do'])
console.log(xs);

let ex2=()=>xs.map((arr)=>{
  return fp.first(arr)
})
console.log(ex2());

// 练习3
let safeProp =fp.curry(function(x,o){
  return Maybe.of(o[x])
})


let user ={id:2,name:'Albert'}
console.log(safeProp(0)(user.name));
let ex3 = (user)=>safeProp(0)(user.name)

// 练习4
let ex4=(n)=>parseInt(Maybe.map(n))
