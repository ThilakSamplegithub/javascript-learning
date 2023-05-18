// object iteration using for-in-loop
const person = {
    name:"harshit",
    age:23,
    "person hobbies":["guitar","sleeping","listening music"]
}
for(let key in person){
    console.log(person[key]),//if i want only value of key in keyvalue pair
    console.log(`${key}:${person[key]}`)// if I wannt keypairs then 1)use template string 2)see other methods in next lines
    console.log(key,person[key])// if I don't want :
    console.log(key,":",person[key])// if I want :
}
// object iteration using object.key method
console.log(Object.keys(person))
console.log(typeof Object.keys(person))
const vari=Array.isArray(Object.keys(person))// to know whether its object or not
console.log(vari)
// as its array now I will use for of loop
for(let persons of Object.keys(person)){
    console.log(persons,":",person[persons])
}
// let me try for loop also as its array, but it requires length but in reality its object so object doesn't have indexes to find length

