// function getNumbers(number1,number2,callback){
//     console.log(number1,number2)
//     callback(number1,number2)
// }

// // add 2 numbers
// function addTwonumbers(num1,num2){
//     console.log(num1+num2)
// }
// getNumbers(4,5,addTwonumbers)
// 2nd way instead of writing callback function out we will write in
// function getNumbers(number1,number2,callback){
//     console.log(number1,number2)
//     callback(number1,number2)
// }

// // add 2 numbers

// getNumbers(42,5,(num1,num2)=>{
//     console.log(num1+num2)
// })
// 1st I wann check wheter passed numbers are string or numbers so 3rd way generally 2callback functions r passed
function getNumbers(number1,number2,onSuccess,onFailure){
        console.log(number1,number2)
       if(typeof number1==='number' && typeof number2==='number'){
        onSuccess(number1,number2)
       }else{
        onFailure()
       }
    }
    
    // add 2 numbers
    
    getNumbers(42,67,(num1,num2)=>{
        console.log(num1+num2)
    },()=>{
        console.log('please enter numbers only')
    })