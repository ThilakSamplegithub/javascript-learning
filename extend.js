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
//   we need not create class newly with same properties
class Dog extends Animal{

}
const tommy=new Dog('Tommy')
console.log(tommy)
let an=tommy.eat()
console.log(an)

