// synchronous javascript executes from top to bottom
/*console.log('I')
console.log('eat')
console.log('icecream')
console.log('with a')
console.log('spoon')
// asychronous nature of  javascript 
console.log('I')
console.log('eat')
setTimeout(()=>{
    console.log('icecream')
},2000)               // 2000 means 2000ms i.e 2seconds so it got printed last and setTimeout is asynchronous function
console.log('with a')
console.log('spoon')*/
let personInfo=[{personName:"Thilak",
age:28,
hobbies:"dancing"},
{personName:'harish',
age:28,
hobbies:'walking'},
{
    personName:'harish',
    age:28,
    hobbies:'walking'   
}]
let filteredData=personInfo.filter((e)=>{
    return e.hobbies=="dancing"
})
console.log(filteredData)
