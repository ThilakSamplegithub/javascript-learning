let i=0
let total = 0
// sum of n natural numbers
while(i<=10){
    total = total + i;
    console.log(total)
    i++
}

// As per observation 2 while loops can't be implemented(only 1st program will be implemented),unlike forloop, if same variable is used so put new variable
// to print numbers from 0 to 10
let n=0;
while(n<=10){
console.log(n)
    n++
}
console.log(n)
// palindrome of a number without using concatenation 
function palindromeofNum(num){
let x=num

let ans=0
while(x>0){
 let rem=(x%10)
 x=Math.floor(x/10)  // it acts as decrement operator as division decrements and multiplication increments
 ans=(ans*10)+rem  // to bring what we want to compare reverse of a number like 1221 is here reverse and if 8521 then reverse is 1258
}
console.log(ans)
if(ans==num){
    console.log('Yes')
}else{
    console.log('No')
}
}
palindromeofNum(4321)