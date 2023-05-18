//new iterable:to extract uniqueness from array
// sets are only for arrays not for objects
const myArray= new Set([2,3,45,66,454,2,3,66])
myArray.add([2,3,45,66,454,2,3,66])       // only 1 element is sent here it is treated as 1 element which is duplicate of element present already in myArray
console.log(myArray)  // same elements r passed so duplicate feature is manifested
const items=['item1','item2']
myArray.add(items)
myArray.add(items)
console.log(myArray)  // here only 1 items named array will be stored no duplicates r allowed
// new set
const sss=new Set()
//now lets add array explicitly 
sss.add(['item1','item2'])
sss.add(['item1','item2'])
console.log(sss)   // here 2 of the same arrays r added no duplicity is manifested as 2 arrays r stored in different addresses
 
for(let myArrays of myArray){
    console.log(myArrays)
}
// in realistic sense even if pass array of same ids we can extract unique ids using its duplicity feature
const arrarra=[2,3,4,5,6,7,2,3,4,5,6,7]
const jarareal=new Set(arrarra) //here i passed array
console.log(jarareal)// here only unique numbers i will get




// order is not guaranteed bcoz sets r not index based 
// so lets find length in different way using forof loop
let length=0
for(let srars of srar){
    length++
}
console.log(length)