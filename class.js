function createUser(firstName,lastName,email,age,address){
    this.firstName=firstName
    this.lastName=lastName
    this.email=email
    this.age=age
    this.address=address
  //return this
    // return user
}
const user1= new createUser('Thilak','singh','truimphThilak@gmail.com',29,'My Address')
const user2= new createUser('Harshit','singh','truimphThilak@gmail.com',2,'My Address')
const user3= new createUser('mohit','singh','truimphThilak@gmail.com',29,'My Address')
createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old`
}
createUser.prototype.is18= function(){
    return  this.age>=18
}
createUser.prototype.sing=function(){
    console.log('sing a song a rapapooo')
}
//instead of writing createUser prototypes always and adding properties there is onather easy way i.e clas
class CreateUser{
    constructor(firstName,lastName,email,age,address){
        this.firstName=firstName
        this.lastName=lastName
        this.email=email
        this.age=age
        this.address=address  
    }
    about(){return `${this.firstName} is ${this.age} years old`}
    is18(){return  this.age>=18}
    isPrintWithArrow(){setTimeout(()=>console.log(this.firstName,'=> Arrow'))}
    isPrint(){setTimeout(function(){console.log(`${this.firstName} is my name`)})}
    sing(){console.log('sing a song a rapapooo')}
}
const user4= new CreateUser('Thilak','singh','truimphThilak@gmail.com',29,'My Address')
console.log(user4)
let ok=user4.about()
console.log(ok)
let s=user4.is18()
console.log(s)
user4.sing()
user4.isPrint()
user4.isPrintWithArrow()
user4.letsCheck()()

