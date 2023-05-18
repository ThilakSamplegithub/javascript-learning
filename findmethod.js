const myArray=['rabbit','lion','Cat','dog']
// i will use function outside 
function findLength(string){
   // return string.length===3
   return string.length===4
}
const ans=myArray.find(findLength)
console.log(ans)
// now lets use function inside find
const anss=myArray.find(function(string){
    return string.length===3
})
console.log(anss)
// now lets use arrow function 
const aasha=myArray.find((string)=>string.length===2)
console.log(aasha)
// realistic use object inside array
const users=[
    {userId:1,productName:'mobile',price:28000},
    {userId:2,productName:'laptop',price:100000},
    {userId:3,productName:'t.v',price:58000},
    {userId:4,productName:'ac',price:228000}
]
//const anshu=users.find((user)=>user.price===28000)
// normally we use userId as every userId is unique
const anshu=users.find((user)=>user.userId===2)
// or
//const anshu=users.find(({userId})=>userId===3)
console.log(anshu)
console.log(users[0])