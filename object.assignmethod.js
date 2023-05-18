const user={
    firstName:'Harshit',
    age:28,
    gender:'male'
}
// to make clone
const user1={...user,secondName:'jaffa'}
console.log(user1)
// we will see onather method
const user2=Object.assign({},user1)
console.log(user2)
