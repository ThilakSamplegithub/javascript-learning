//objects r called as objects litterals
//literals r those which has {} and keypairs
// keys in objects r only of 2 types:strings and symbols
const objec={
    objName:'harsha',
    5:'five'
}
// is 5 taken as string or number lets check
for(let objectios in objec){
    console.log(typeof objectios)    // both r taken as strings only
}
 // now lets start map data structure
 // purpose of Mapdata structure is we can pass key of ANY datatype unlike object
 const macha=new Map()
 macha.set(1,'one')  // here 1 is key and 'one' is value
 macha.set("str",3)  // here str is key in the form of string whereas 3 is keyvalue
 macha.set([4,566,44],'starr')
 console.log(macha)
 macha.set({key:'keyvalue'},'keypairvalue')
console.log(macha)
// access key's values in map using 'get'method
console.log(macha.get(1))
console.log(macha.get('str'))
console.log(macha.get([4,566,44]))  // ans is undefined
// if I want all keys then use keys method
console.log(macha.keys())
// if I want all keys in line-wise 
for(let keys of macha.keys()){
    console.log(keys)
}
//now lets check typeof
for(let machas of macha ){
    console.log(machas,Array.isArray(machas))               // machas r iterable and they r in array form
} 
// here we r to destructure keypair value into key and its value
for(let [key,value] of macha){
    console.log(key,value)
}
// now lets pass anArray directly into map
const myArray=new Map([['firstName','harshit'],['age',7],['Arrayname',8]])
console.log(myArray)
// purpose of map data structure is to store extra information about an object
const person={
    firstName:'Harshit',
    id:1
}
const extrainformation=new Map()
extrainformation.set(person,{'age':25,'gender':'male'})
console.log(extrainformation)
console.log(extrainformation.get(person))
console.log(person.id)
// if i want especially age only
console.log(extrainformation.get(person).age)
//lets add onather object
const person1={
    firstName:'lasya',
    id:2
}
extrainformation.set(person1,{"age":28,'gender':'female'})
console.log(extrainformation.get(person1))
console.log(extrainformation.get(person1).gender)
console.log(extrainformation.get(person1).age)
console.log(extrainformation)

