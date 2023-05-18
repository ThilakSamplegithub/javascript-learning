// iterables are those which satisfy forof loop
// strings
let str='Thilak'
for(let strs of str){
    console.log(strs)
}                             // hence strings r iterables
// arrays
const myArray=[1,2,3,45,65]
for(let myArrays of myArray){
    console.log(myArrays)           // hence arrays r also iterables
}
// lets see objects
const userInfo={
    firstName:'harshit',
    age:7,
    gender:'male'
}
//for(let users of userInfo){
  //  console.log(users)        // error: hence objects r not iterable
//}
