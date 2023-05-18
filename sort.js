const numbers=[200,34,566,46443,3433]
// aim to sort in ascending ordr
const ans=numbers.sort()
console.log(ans) // each number has ascii code so 1st numbers r changed into string and checking ascii code for it
// now lets aim to sort strings
const strings=['harsh','jaffa','brahmmanan','agni','deva','aasha']
const answ=strings.sort()
console.log(answ)
const strings2=['harsh','jaffa','brahmmanan','agni','deva','aasha','THILAK']
const answe=strings2.sort()
console.log(answe) // capital letters will come first due to ascii numbers are relatively low in value in comparision to lower case letters
// now lets sort numbers in ascending order
const ansu=numbers.sort((a,b)=>a-b)  // it means if a-b is +ve then b comes in a's place but need not go in detail in sort method
console.log(ansu)
// now lets sort numbers in descending order
const anse=numbers.sort((a,b)=>b-a)
console.log(anse)
// in realistic sense
const userCart=[
    {userId:1,productName:'mobile',price:23400},
    {userId:2,productName:'momo',price:28},
    {userId:3,productName:'laptop',price:123400},
    {userId:4,productName:'tv',price:53400}
]
// let me sort according to price in ascending order
const anshu=userCart.sort((a,b)=>a.price-b.price)
console.log(anshu)
// now lets sort in descending order using dot or bracketet in parameter
const descendingprice=userCart.sort((a,b)=>b['price']-a['price'])
console.log(descendingprice)