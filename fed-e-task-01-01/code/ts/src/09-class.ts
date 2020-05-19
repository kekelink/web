

// calss

export { }
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

