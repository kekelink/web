

const man={
  name:'jscoder',
  age:22
}
const proxy = new Proxy(man,{
  get(target, propKey, receiver){
      // console.log(target);
      console.log(propKey);
      // console.log(target);
      if(propKey==='location'){
        throw 'Parameter is not a number!';
      }
      return target[propKey]
  },
  set(target, propKey, value, receiver) {
    // console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
})

proxy.name  // "jscoder"
proxy.age     // 22

proxy.location   // Property "$(property)" does not exist