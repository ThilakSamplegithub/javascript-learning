// if we have same properties in onather class then extend is useful
console.log('Thilak')
class Animal{
    constructor(name){
        this.name=name
    }
    eat(){
        return `${this.name} is eating`
    }
    run(){
        return `${this.name} is running`
    }
}
const anim=new Animal('wolf')
console.log(anim)
let a=anim.eat()
console.log(a)
// note methods must be written in short syntax form of method i.e functionname(){} instead of functionname:function(){}
//   we need not create class newly with same properties but if i wanna add new properties then use super
// so now to add some properties so we need to create object so we need to write constructor
// even to add method we need to create object so we need to write constructor and super to refer to super class or parent class or base class ie Animal
class Dog extends Animal{
  constructor(name,speed){
    super(name)
    this.speed=speed
  }
  speedy(){
    return `${this.name} runs at speed of ${this.speed}kmph`
  }
}
const tommy=new Dog('Tommy',145)
console.log(tommy)
let s=tommy.speedy()
console.log(s)
let an=tommy.eat()
console.log(an)

