let firstName = 'harshit';
console.log(firstName[6]);// it's string indexing means every letter assigned an index starting from 0
console.log(firstName.length);
let second = 'harshitirjrjgnfngknkldnsnl    ';
console.log(second.length)//this is to find length of the string
console.log(second[second.length-12]);// this is to find index through length of the string
//string methods
console.log(second.trim())//strings are immutable so v can change the length of existing string still v have 2 ways :
second=second.trim()
console.log(second.length)
secondstring=second.trim()
console.log(secondstring.length)

// Problem 3 : Given an array of string count the overall total number of characters
let arr=['harshit','Thilak','Mohit',' ','harry123']
let count =0
for(let i=0;i<=arr.length-1;i++){
 for(let j=0;j<=arr[i].length-1;j++){
   if(arr[i][j]!==','){
     count++
   }
 } 
}
console.log(count)