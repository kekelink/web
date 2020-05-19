//  Proxy  可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，
//都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

 const obj ={

   name:'ll',
   age:24
 }
 const objProxy = new Proxy (obj,{
   get (target,property){
     
    //  代理对象, 值
    //  console.log(target,property);
      return  property in target ?target[property]:'default'
   },
   set (target,property,value){

   }
 })

 console.log(objProxy.name1);
 