const user={
    firstName:'Thilak',
    about:()=>{
        console.log(this)
        return `${this.firstName} is my name`
    }
}
console.log(user.firstName)
let se=user.about()
console.log(se)
const person={
    firstName:"thakur",
    is18:function(){
        console.log(this)
        console.log(this.firstName)
    }
}
person.is18()
// so we can usderstand that when we use arrow function and this this will represent object but its 1level up