const numbers=[2,3,4,,5,6,8]
const umber=[2,4,6,8]
const ans=numbers.every((a)=>a%2===0)
console.log(ans)
const anns=umber.every((a)=>a%2===0)
console.log(anns)
//in realistic example
const userCart=[
    {userId:1,userproductName:'mobile',price:28999},
    {userId:2,userproductName:'tv',price:58999},
    {userId:3,userproductName:'laptop',price:128999},
    {userId:4,userproductName:'ac',price:228999}
]
const aasha=userCart.every((a)=>a.price<300000)
console.log(aasha)
// if <50000
const letse=userCart.every(({price})=>price<50000)
console.log(letse)