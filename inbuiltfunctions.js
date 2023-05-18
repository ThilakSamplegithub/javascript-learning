// use split function
// split function function only when input is string
let sen='the quick brown fox jumps over the lazy dog'
console.log(sen.split('')) // here i split on BASIS of empty spaces AVAILABLE and convert the string into arrays elements
console.log(sen.split(' '))//here I split on BASIS of spaces AVAILABLE
let sent='the quick- brown fox - jumps over the lazy -dog'
console.log(sent.split(','))
console.log(sent.split('-'))
// use join function 
// how we concatenate using join with what we concatenate using join
// join function functions only when we use input as array
let arr=['air','fire','sky','land','water','sky']
console.log(arr.join('*'))
console.log(arr.join('-->>'))
// lastIndexOf
// this function works only when i/p is array
console.log(arr.lastIndexOf('sky')) // however this inbuilt functiion starts searching from last to first by default
console.log(arr.lastIndexOf('sky',4))// here this inbuilt functio starts searching from 4th index
// includes function
console.log(arr.includes('sky'))
console.log(arr.includes('mud'))
// substring
let str='masai'
console.log(str.substring(1,63))



