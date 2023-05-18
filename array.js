// array is ordered collection of items
let fruits = ["apple","mango","grapes"];
console.log(fruits)
// array indexing
console.log(fruits[1]);
// to replace elements in same index
fruits[1]="banana"
console.log(fruits)
// check typeof 
console.log(typeof fruits) // array is referencetype and reference types are objects
// there are many objects but to confirm array use this function: Array.isArray(arrayname)
console.log(Array.isArray(fruits))
//to add last element
fruits.push("papaya","orange")//see am not assigning this changed original array to any unlike string, array is mutable
console.log(fruits)
//to remove last element
fruits.pop();
console.log(fruits)
//to add 1st element
fruits.unshift("kb fruit","watermelon")
console.log(fruits)
// to remove 1st element
fruits.shift();
console.log(fruits)