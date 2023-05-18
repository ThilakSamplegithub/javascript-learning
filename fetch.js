// const URL="https://jsonplaceholder.typicode.com/posts"
const URL="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries"
// const letsee=fetch(URL)
// console.log(letsee)          u see its a promise in console so it must return promise it must resolve here i want response
// fetch(URL)
// .then(response=>{
//     //console.log(response)   // i didn't got my data as response but i see here json method
//     //console.log(response.json()) // as json is method i called and consoled it I see result as promise pending 
//     // if its promise i can return promise to chain bcoz i didn't got data i required and it will have resolve 
//     // which i can see in then only i.e consuming promise here we create and returnd promise
//     return response.json()
// })
// .then(data=>{
//     console.log(data)  // here I got data I require so happy now can i use catch if promise doesn't resolve it will reject
// })
// .catch((error)=>{
//    console.log('inside catch')
//    console.log(error)                      // GET https://jsonplaceholder.typicode.com/post 404 here my status code is 404
//    // i didn't catch means its not rejected so promise is not rejected its resolved 
//    // promise gets rejected only if network fails check disconnecting network
//     // i got this fetch.js:4          GET https://jsonplaceholder.typicode.com/post net::ERR_INTERNET_DISCONNECTED
//     // (anonymous) @ fetch.js:4
//    //see here // fetch.js:16 inside catch
//     // fetch.js:17 TypeError: Failed to fetch
// })
            //   i want to show  promise is not rejected until we donot disconnect via internet. For evidence console anything 
fetch(URL)
.then((restlela)=>{
if(restlela.ok){
    return restlela.json()                   // now my promise got rejected
}else{
    throw new Error('something went wrong')    
}
   
})
.then((data)=>{
 console.log(data)
})
.catch((error)=>{
    console.log('inside catch')
    console.log(error)
})
