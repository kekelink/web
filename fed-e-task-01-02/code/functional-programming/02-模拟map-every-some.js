// map

// const map =(array,fn)=>{
//   let res=[]
//   for(let val of array){
//     res.push(fn(val))  
//   }
//   return res
// }
// let arr = [1,3,4]
// console.log(map(arr,(val)=>val*2));
// console.log(arr);


//  every 是否都满足某一个条件
// const every=(array,fn)=>{
//   let res=true
//   for(let value of array){
//     res=fn(value)
//     if(!res){
//       break
//     }
//   }
//   return res
// }
// let arr =[11,32,41]
//  let r=every(arr,(v)=>v>10)
//  console.log(r);
 
// some 是否有一个满足某一个条件
// const some =(array,fn)=>{
//   let res= true
//   for(let value of array){
//       res=fn(value)
//       if(res){
//         break
//       }
//   }
//   return res
// }
// let arr =[1,3,5,10]
// let r =some(arr,v=>v%2===0)
// console.log(r);

// 闭包
// function fn (){
//   let res= 'aaa'
//   return function fn2(){
//     console.log(res);
    
//   }
// }
 

function makeSalary(base){
  return function (performance){
    return base+performance
  }
}

let a1= makeSalary(12000)
let a2= makeSalary(1300)
console.log(a1(200));
console.log(a1(2000));
console.log(a1(3000));
