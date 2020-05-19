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

//  泛型 定义
 function fn<T>(str:T):T[]{
   const arr =Array<T>(length).fill(str)
    return arr
 }