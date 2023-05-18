// synchronous js
// console.log('starts')
// for(let i=0;i<1000;i++){
//     console.log('inside loop')
// }
// console.log('loop ends')
//feature of asynchronouw
console.log('script starts')
setTimeout(myFunc,1000)         // its delayed by minimum of 1000 ms max depends on how big code is 
function myFunc(){
    console.log('inside setTimeout')
}
console.log('script ends')
//other way to write
setTimeout(()=>{
    console.log('this is writing inside callback')
},2000)
// even if i give 0milliseconds it will execute only after all code have completed