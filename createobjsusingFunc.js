// we will create objects using functions
/*let objData={
    firstName:'Thilak',
    lastName:'singh',
    email:'truimphThilak@gmail.com',
    age:29,
    address:'My Address',
    about:function(){
     return `${this.firstName} is ${this.age} years old`
    },
    is18:function(){
        return  this.age>=18
    }
}
console.log(objData)
console.log(objData.about())
console.log(objData.is18())
//console.log(objData)*/
// now lets create same object using function
// 1st take input in function then create object then add using dot notation
// 1)here objects are created using functions but with methods inside it
/*function createUser(firstName,lastName,email,age,address){
    let user={}
    user.firstName=firstName
    user.lastName=lastName
    user.email=email
    user.age=age
    user.address=address
    user.about=function(){
        return `${this.firstName} is ${this.age} years old`
    }
    user.is18=function(){
        return  this.age>=18
    }
    return user
}
const user1=createUser('Thilak','singh','truimphThilak@gmail.com',29,'My Address')
const user2=createUser('Harshit','singh','truimphThilak@gmail.com',29,'My Address')
const user3=createUser('mohit','singh','truimphThilak@gmail.com',29,'My Address')
console.log(user1)// as everything is stored in user1 variable
console.log(user1.firstName)
console.log(user1.about())
console.log(user1.is18())*/
// 2)but we will remove methods from function as it takes space so I will create object seperately
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
    let user={}
    user.firstName=firstName
    user.lastName=lastName
    user.email=email
    user.age=age
    user.address=address
   user.about=userMethods.about
   user.is18=userMethods.is18
   user.sing=userMethods.sing
    return user
}
const user1=createUser('Thilak','singh','truimphThilak@gmail.com',29,'My Address')
const user2=createUser('Harshit','singh','truimphThilak@gmail.com',29,'My Address')
const user3=createUser('mohit','singh','truimphThilak@gmail.com',29,'My Address')
console.log(user1)// as everything is stored in user1 variable
console.log(user1.firstName)
console.log(user1.about())
console.log(user1.is18())
console.log(user2.about())
user1.sing()
// still we can improvise this in next object.create file because how many times we will add methods if there are 
// million methods is it suggestible


