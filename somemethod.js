const numbers=[4,3,55,554,34]
const ans = numbers.some((a)=>a%2===0)
console.log(ans)   // if atleast some r even then its true
const anshu=numbers.some((a)=>a%2!==0)// if some r odd as its true it infers some elements in this array r odd
console.log(anshu)
// to check whether any product in my cart is >1lakh
const userCart=[
    {userId:1,productName:'mobile',price:28000},
    {userId:2,productName:'Tv',price:58000},
    {userId:3,productName:'A.c',price:228000},
    {userId:4,productName:'laptop',price:128000}
]
const aasha=userCart.some((a)=>a.price>100000)
console.log(aasha)
// now lets see whether any product price is>3lakh
const dana=userCart.some(({price})=>price>300000)
console.log(dana)