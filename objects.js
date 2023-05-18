/*const person ={
    name:"Harshit",
    age:23,
    hobbies:["guitar","sleeping","listening music"]
}
console.log(person)
// if i want to  access data specifically about akey value pair using dot notation
console.log(person.name)
console.log(person.age)
console.log(person.hobbies)
// if i want to  access data specifically about akey value pair using bracket notation
console.log(person["name"])
console.log(person["age"])
console.log(person["hobbies"])
//importance of bracket notation 1.
const persons={
    name:"Harshit",
    age:23,
    "person hobbies":["guitar","sleeping","listening music"] // javascript doesn't recognise space so double quotation became mandatory
}
console.log(persons["person hobbies"])// here dot notation doesn't recognised so error will occur
//adding key value pair to object using dot notation
person.gender="male"
console.log(person)
//adding key value pair to object using bracket notation
person["designation"]="web developer"
console.log(person)
//importance of bracket notation 2.
const key="email"
person[key]="thilak@gmail.com"  // its not possible if we use dot notation to reflect key in declared variable in to the object
console.log(person)*/
console.log('*****************')
// print unique elements in array
let arr=[1,3,4,3,55,65,1,3,65,7,8]
let obj={}
/*for(let i=0;i<=arr.length-1;i++){
    obj[arr[i]]=1
}*/
console.log(obj)  // this gives unique elements in obj not how many times a number repeated
for(let i=0;i<=arr.length-1;i++){
    if(obj[arr[i]]===undefined){
        obj[arr[i]]=1
    }else{
        obj[arr[i]]++
    }
}
console.log(obj)
// print the no of times a character appears
let str='mammothia'
let obj1={}
for(let i=0;i<=str.length-1;i++){
    if(obj1[str[i]]==undefined){
        obj1[str[i]]=1
    }else{
        obj1[str[i]]++
    }
}
console.log(obj1)

