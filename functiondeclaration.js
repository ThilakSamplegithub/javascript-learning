console.log('hello world')
console.log('hello world')
console.log('hello world')
// or i  can use function declaration and call function
function hello(){
    console.log("hello world: function call")
}
hello()
hello()
hello()
hello()
// sum of three numbers
function sumthreenumbers(number1,number2,number3){
   console.log(number1+number2+number3)  // or return number1+number2+number3;
}
sumthreenumbers(2,3,45)       //or  const sum=sumthreenumbers(2,3,4);
// or   console.log(sum)
// multiplication of 3 numbers
function mul(num1,num2,num3){
    return num1*num2*num3;
}
console.log("multiplication of numbers is",mul(4,44,3))
// if any number is undefined then results in NaN ie not a number
function mult(num1,num2,num3){
    return num1*num2*num3;
}
console.log(mult(3,4))
// odd or even 1)in traditional way using if else
function iseVen(number){
    if(number%2===0){
        return true;
    }else{
        return false;
    }
}
console.log(iseVen(430));

// still ifelse can be modified into 2) no need to write else condition
function isevEn(number){
    if(number%2===0){
        return true;
    }
     return false;
    
}
console.log(isevEn(45));

// odd or even in 3) single liner way
function isEven(number){
    return number%2===0;
}
console.log(isEven(4))

// determing output as 1st character of string 
function firstChar(anystring){
 return anystring[0];
}
console.log(firstChar("star"));
// I want the index of element i given from array
function findTarget(myarray,target){
    for(let i=0;i<=myarray.length-1;i++){
        if(myarray[i]===target){
            return i
        }
    }return -1;
        
}
const newArray=[4,455,2,43];
const ans=findTarget(newArray,43)
console.log(ans);
// loop hole in split function
let str="the      Quick brown fox jumps over the lazy dog"
console.log(str.split(''))  // (22) ['the','Quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
// see spaces also separated this is loop hole  
// lets write function and solve that space are not taken into account 
let arr=[]
let words=''

for(let i=0;i<=str.length-1;i++){
    //let words=''
   
    if(str[i]!==' '){
        words=words+str[i]
    }else if(words==""){
        continue;
    }else  if(str[i]===' '){
 arr.push(words)
 words=''
      
}
}
arr.push(words)


console.log(arr)
console.log(str.length)

