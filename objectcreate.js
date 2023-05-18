// still we can improvise this in next object.create file because how many times we will add methods if there are 
// million methods is it suggestible
//  so lets use Object.create() instead of adding methods in function
const obj1={
    key1:'value1',
    key2:'value2'
}
/*const obj2={
    key3:'value3'
}*/
//console.log(obj2.key3)
console.log(obj1.key1)
// it is well till here
//console.log(obj2.key2) // we got undefined but if we want use object create to proto chaining'
const obj2=Object.create(obj1)
obj2.key3='value3'
console.log(obj2.key3)
console.log(`we dont have this key2 in obj2 but due to objectcreate we got ${obj2.key2} `)
obj2.key1='unique'// we have set key1 in obj2 which is already in obj1
console.log(`we got result as unique bcoz js 1st checks in obj2 if its not available then it goes to obj1 ${obj2.key1}`)


const userMethods={
    about:function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18:function(){
        return  this.age>=18
    },
    sing:function(){
        console.log('sing a song a rapapooo')
    }
}
function createUser(firstName,lastName,email,age,address){
    let user=Object.create(userMethods)  //here userMethods is proto or [[prototype]] not prototype 
    // using Object.create(userMethods) we have created link between user and userMethods ie proto
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
console.log(user1)// as everything is stored in user1 variable
console.log(user1.firstName)// this is present in function so js doesnt use object.create
console.log(user1.about())// about is not present in user object so js is guided by proto to userMethod to check if its present
console.log(user1.is18())
console.log(user2.about())
user1.sing()
console.log(user3.about())
console.log(user2.is18())

// still inspite of this we can make some changes to reflect same result using new keyword in onather file



