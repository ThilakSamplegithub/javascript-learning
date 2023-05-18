const obj1={
    key1:"value1",
    key2:"value2",
    key3:"value3",
    key4:"value4"
}
console.log(obj1)
// object destructuring
let{key3,key4}=obj1
console.log(key3,key4)
// if i want to change key name of a value like key1 to var1
let{key1:var1,key2}= obj1;
console.log(var1)
// wanna make new object by destructuring
console.log(obj2)
const band={
    bandName:"led zaplin",
    famoussong:"stairway to heaven",
    year:"1968",
    "onather famous song":"kashmir"
}
const{bandName,famoussong,...newObj}=band
console.log(newObj)