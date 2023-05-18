// first start with array i.e spread string into elements
const vari=[..."abc"]
console.log(vari)
const mari=[..."133345"]               //const mari=[...2444554] is not iterable bcoz its not string form
console.log(mari)
// lets form clone of object 
const person ={
    name:"harshit",
    age:23,
    "person hobbies": ["guitar","sleeping","listening music"]
}
const maria={...person}
console.log(maria)
const marine={..."abc"}// to spread abc string into key pairs in object 
console.log(marine)
//add extra elements along with spreading clone of 2 objects
const obj2={
    key1:"value1",
    key2:"value2"
}
const clone={...person,...obj2}
console.log(clone)
// here array is cloned
const clone2={...["item1","item2"]}
console.log(clone2)
// add keyvalue pair along with object cloned
const clone3={...person,"key69":"value69"}
console.log(clone3)