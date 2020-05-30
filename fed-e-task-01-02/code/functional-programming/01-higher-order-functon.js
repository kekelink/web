// 高阶函数 参数可以是函数

// function ForEcah (arr,fn){
//   for(let i=0;i<arr.length;i++){
//      fn(arr[i])
//   }
// }

// let arr =[2,4,6]

// ForEcah(arr,(item)=>{
//   console.log(item)
  
// })


// filter
// function filter (array,fn){
//   let results=[]
//   for(let i=0; i<array.length; i++){
//     if(fn(array[i])){
//        results.push(array[i])
//     }
//   }
//   return results
// }

// //  测试

// let arr= [1,2,4,5,60]
// let a= filter(arr,(item)=>{
//    return item>3
// })
// console.log(a);

// once
 function once (fn){
  let done =false
  return function (){
    if(!done){
      done=true
      return fn.apply(this,arguments)
      // return fn(...arguments)
    }
  }
 }
 let pay={
   b:'测试'
 }
 pay.a = once(function(money){
  //  console.log(this);
  console.log(this.b);
  
   console.log(`支付：${money} RMB`);
 })
 pay.a (200)
 pay.a (200)
 pay.a (200)
