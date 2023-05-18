// prototype is different from proto bcoz proto is reference where to go for js if it cant find required info
// prototype is emptyobject and functions only will have prototype 
// using prototype we can add our own properties that could be function or key
// treat function as combo of function and object
function helloewyruiywi(){
    console.log("hello world")
}
//helloewyruiywi()
console.log(helloewyruiywi.name)//here name is a property
// lets check its prototype
console.log(helloewyruiywi.prototype)  // in updated browser [[prototype]] is proto which acts as reference address
helloewyruiywi.prototype.firstName='Thilak'// here i added firstname property
console.log(helloewyruiywi.prototype)
helloewyruiywi.prototype.lastName='singh'
console.log(helloewyruiywi.prototype)
console.log(helloewyruiywi.prototype.lastName) // we can acces it 
// we will add function as property which if prototype is property then function becomes method
helloewyruiywi.prototype.hello=function(){
    console.log('bolo world')

}
helloewyruiywi.prototype.hello()
helloewyruiywi.prototype.obj={
    product:'mobile'
}
console.log(helloewyruiywi.prototype)
// more about prototype 
// everything has prototype thats why we get many properties including Array,object string
// but we dont get array or string prototype easily
const arr=['thalaiva']
console.log(arr) // see prototype see all of its properties its like model 
let objs={
    person:'Ajith'
}
console.log(objs)
console.log(console)// see this also has many properties like every key has function so i can call thejm as methods
// in next we will link proto and prototype in same way by adding those functions which we stored as methods in anobject

function createUser(firstName,lastName,email,age,address){
    let user=Object.create(createUser.prototype)  //here userMethods is proto or [[prototype]] not prototype 
    // using Object.create(replaced userMethods by functionname.prototype) we have created link between user and userMethods ie proto
    user.firstName=firstName
    user.lastName=lastName
    user.email=email
    user.age=age
    user.address=address
//    user.about=userMethods.about
//    user.is18=userMethods.is18
//    user.sing=userMethods.sing
    return user
}
const user1=createUser('Thilak','singh','truimphThilak@gmail.com',29,'My Address')
const user2=createUser('Harshit','singh','truimphThilak@gmail.com',2,'My Address')
const user3=createUser('mohit','singh','truimphThilak@gmail.com',29,'My Address')
console.log(createUser.prototype)
createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old`
}
createUser.prototype.is18= function(){
    return  this.age>=18
}
createUser.prototype.sing=function(){
    console.log('sing a song a rapapooo')
}
// next lets see how do we not write just bcoz of 1key word i.e new which replaces ,returns by default in onather file
