// const bucket=['noodles','vegetables','rice','salt']
// // here we will create promise using new like constructor. Here promose is object 
//  const friedRicePromise=new Promise((resolve,reject)=>{
//    if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice') ){
//     resolve('My Fried rice')
//    }else{
//     reject('Cant fulfill promise')
//    }
// })
// now we will consume promise actually promise is consumed by browser then after checking conditions its 
// result will be placed in callback queue's micro task
// incomparision to call back queue, callback queue's micro task is given relatively higher priority by eventloop

//friedRicePromise.then((myfriedRice)=>{console.log('lets eat',myfriedRice)},(error)=>{console.log(error)})
// we can also pass object or array inside resolve 

const bucket=['noodles','vegetables','rice','alt']
// here we will create promise using new like constructor. Here promose is object 
 const friedRicePromise=new Promise((resolve,reject)=>{
   if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice') ){
    resolve({rice:'fried rice'})
   }else{
    reject(new Error('something missing from bucket'))
   }
})
// wen we care only resolve
//friedRicePromise.then((myfriedRice)=>{console.log(myfriedRice)})
// when we care only reject
// friedRicePromise.then(null,(error)=>{console.log(error)})
//we can pass resolve and reject seperately 
friedRicePromise.then((myfriedRice)=>{console.log(myfriedRice)}).catch((error)=>{console.log(error)})
