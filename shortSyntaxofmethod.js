let user={
    firstName:"Thilak",
    about:function(){
         console.log(`${this.firstName} is my name`)
    }
}
console.log(user)
// user.about()
// here method can be written as key as well as removing : and function with () it is highly used in classes
let user1={
    firstName:"Thilak",
    about(){
         console.log(`${this.firstName} is my name`)
    }
}
console.log(user1)
// console.log(user1.firstName)
// user1.about()