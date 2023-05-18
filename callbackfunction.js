// call back string

// call back array

// call back object


// lets call them 
function funny(callback){
    return callback
}
console.log(funny('junctionlo'));
console.log(funny([2,3,4,5,6]))
console.log(funny({
    name:'thilsa',
    gender:'male'
}))
//now its time to callback function

// call back function is higher order function
const myFunc=()=>{
    console.log('hello world')
}
// onather function
function miami(a){
    return a          //yet i didnt call
}
console.log(miami(myFunc))  // in this I called only miamimi function but I only function as input
// here we will callback function
function myFunc2(a){
    return a()                // here we gave call
}
console.log(myFunc2(myFunc))
// now we will get result using callback as conventional keyword
const name=function(callback){
    return callback()
}
console.log(name(myFunc))
