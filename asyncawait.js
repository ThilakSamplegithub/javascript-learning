// async await will remove .then also
// so i will previous example and i will do get request
 const url="https://jsonplaceholder.typicode.com/posts"
// fetch(url)
// .then(response=>{
//     if(response.ok){
//         return response.json()
//     }else{
//         throw new Error('something went wrong')
//     }
// })
// .then(data=>{
//     console.log(data)
// })
// .catch(error=>{
//     console.log('inside catch')
//     console.log(error)
// })
// here i will bring changes in the same code where i will replace then with await and async before declaration of function
async function myFunc(){
   const response=await fetch(url)
   //console.log(response)
   if(response.ok!==true){
    throw new Error('something went wrong')
   }
   const data=await response.json()
   //console.log(data) here i will get data but i require out i dont know y
    return data // doesn't return any-thing 
}
const getPost=myFunc()
//console.log(getPost) // promise pending bcoz async always returns promise 
// so we can resolve it by consuming it
.then(myData=>{
    console.log(myData)
})
.catch(error=>{
    console.log(error)
})
// some writ in arrow function  format so this is onather model
const getPosts=async()=>{
   const res= await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries")
   if(res.ok!==true){
    throw new Error('something went wrong')
   }
   const data1=res.json()
   return data1
}
getPosts()
.then(resol=>{
    console.log(resol)
})