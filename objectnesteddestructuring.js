const users=[{
    userId:1,
    firstName:"harshit",
    gender:'male'
},
{
    userId:2,
    firstName:'mohit',
    gender:'male'
},

{
    userId:3,
    firstName:'Nitish',
    gender:'male'
}]

console.log(users)
// destructure in to variables
var[user1,user2,user3]=users;
console.log(user1,user3)
// destructure into array also
var[user1,...array1]=users;
console.log(array1)
// destructrure from object inside array
var[{userId},user2,{firstName}]=users
console.log(userId,firstName)
// if i want to skip any user to mention  for eg:user2
var[user1, , user3]=users
// if i want to change the key name like user1-firstName,user3-gender to onather variable name or key name or property name
const[{firstName:user1firstName}, ,{gender:user3gender}]=users
console.log(user1firstName,user3gender)
const person = {
    name:'harshit',
    age:34,
    'person hobbies':['guitar','sleeping','listening music']
}
person.age=22
person.name='thilak'
console.log(person) // see same key but later key value is taken in key value pair
const clone={...person,...users,"gender":'female'};
console.log(clone)