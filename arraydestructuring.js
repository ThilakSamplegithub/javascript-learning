const fruits = ["apple","mangoes","orange","grapes"]
let fruits1=[fruits[0],fruits[1]]
let fruits2=[fruits[2],fruits[3]]
console.log(fruits1)
console.log(fruits2)
//let[var1,var2,var3,var4]=fruits // here destructured into variables 
//console.log(var1,var2)
// to make a new array
const mynewArray1= fruits.slice(2)
console.log(mynewArray1)
// here destructured into variables and arrays
let[myvar1,myvar2,...mynewArray]=fruits//here destructured into both variables and arrays simultaneously
console.log(myvar1,myvar2)
console.log(mynewArray)//here de