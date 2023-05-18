// know function returning function is higher order function
function myFunc(){
    return 3
}
console.log('it returned number',myFunc())
function myFunn(){
    return 'Star'
}
console.log('here returning the string',myFunn())
function array(){
    return [2,3,4,5]
}
console.log('here I return the array',array())
// now its turn of the object
function obj(){
    return {
        name:'Thilak',
        age:28
    }
}
console.log('here comes the object',obj())
// now lets return funtion
function dragon(){
    console.log('hello world')
}
function myfuncT(){
    return dragon          // here i didnt call function 
}
console.log('here comes the function but not otherone',myfuncT())
// here i will return function by calling it (dont focus much on my words)
function miami(){
    return dragon()
}
console.log('here i will return function',miami())