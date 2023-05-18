// we will extract element and index from array
const numbers= [4,2,5,8]
function multiplyby2(number,index){
    console.log(`the number is ${number} and index is ${index}`)
}
multiplyby2(numbers[0],0)
multiplyby2(numbers[1],1)
multiplyby2(numbers[2],2)
multiplyby2(numbers[3],3)
// now lets do same using forloop
for(let i=0;i<=numbers.length-1;i++){
    multiplyby2(numbers[i],i)
}
//now lets multiply by 2
for(let i=0;i<=numbers.length-1;i++){
    multiplyby2(2*numbers[i],i)
}
// now lets use forEach method
numbers.forEach(multiplyby2)
// now lets use forEach method by creating function and multiplying each element by 3
numbers.forEach(function(ichosenumber,index){
    console.log(`here the number is ${ichosenumber*3} and index is ${index}`)
})
// in realistic scenario we use forEach array method in objectinsidearray
const users=[
    {firstName:'Thilak',age:28},
    {firstName:'mohit',age:28},
    {firstName:'nitish',age:28},
    {firstName:'garima',age:28}
]
// 1st i will use forloop
for(let i=0;i<=users.length-1;i++){
    console.log(users[i].firstName)
}
// i will try using forof loop
for(let user of users){
    console.log('using forof loop',user['firstName'])
}
// now we will do using forEach array method its like loop 
users.forEach(function(number,index){
    console.log(number.firstName,index)      // here if i use template string its not giving result as elements in array
})
// now we will do 2nd method using keys
users.forEach(function({firstName},index){
    console.log(firstName,index)
})
// i want to create function using arrow function in forEach method
console.log('this is same result but using arrow function')
users.forEach((number,index)=>{
    console.log(number.firstName,index)
})

// const words = ["one", "two", "three", "four"];
// words.forEach((word) => {
//   if (word.length>=3) {
//     words.shift();
//   }
// });
// console.log(words.join("").length); 
// 0/1
// 8
// 7
// 9
// 10
// Other:
// 0
 
// Correct answer
// 9