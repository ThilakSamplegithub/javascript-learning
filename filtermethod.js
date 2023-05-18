const numbers=[3,2,4,6,8,9]
// to filter even numbers using function outside map
function isEven(number){
    return number%2===0
}
console.log(numbers.filter(isEven))
// to filter odd numbers 
function isOdd(number){
    return number%2!==0
}
console.log(numbers.filter(isOdd))
// let me do with arrow function using return and  single statement
const ans=numbers.filter((a)=>{
    return a%2===0
}) 
console.log(ans)
// now single statement
const answ=numbers.filter((number)=>number%2!==0)
console.log(answ)
// realistic sense
const users=[
    {userId:1,productName:'mobile',price:28000},
    {userId:2,productName:'tv',price:58000},
    {userId:3,productName:'laptop',price:200000},
    {userId:4,productName:'washingmachine',price:80000}
]
const dans=users.filter(({price})=>price<100000)
console.log(dans)

// function func(x){
//     return x%2==0 || "good";
//   }
  
//   const numbers = [1,2,3,4,5];
//   const res = numbers.filter(func)
  
//   console.log(res.join(""))
//   *
//   ···
//   /1
//   "good2good4good"
   
//   Correct answer
//   12345