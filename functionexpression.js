// convert function declaration into function expression
//function singHappybirthday(){
    //console.log("happy birthday to you");
//}
//singHappybirthday();

// i will convert into function expression
const singHappybirthday=function(){
    console.log("happy birthday to you.....")
}
singHappybirthday();
// sum of 2 numbers
// using function declaration 
//function sumtwonumbers(num1,num2){
 //   return num1+num2;
//}
//console.log(sumtwonumbers(23,45))
// now lets convert into function expression
const sumtwonumbers= function(num1,num2){
    return num1+num2;
}
console.log(sumtwonumbers('using function expression is',43,45));
// now multiplication of 3 numbers
//function mul(num1,num2,num3){
 //   return num1*num2*num3;
//}
//console.log(mul(34,4,3))
// now using function expression
const mul=function(num1,num2,num3){
    return num1*num2*num3
}
//console.log(mul("here function expression is ",3,45,4))
// even or odd using function declaration
//function isEven(number){
    //return number%2===0;
//}
//console.log(isEven(45));
// using function expression
const isEven=function(number){
    return number%2===0;
}
console.log("using function expression:",isEven(67))
// 1st character of string using function declaration
//function firstChar(anystring){
  //  return anystring[0];
//}
//console.log(firstChar('wahttr'))
//using function expression 
const firstChar=function(anystring){
    return anystring[0]
}
console.log(firstChar('jsdhfkl'))
// find index of targeted element in array
function targetNumbers(array,target){
    for(let i=0;i<=array.length-1;i++){
        if(array[i]===target){
           return i;
        }
    }return -1
}
console.log('here is using function declaration:',targetNumbers([3,4,56,23],23))
// using function expression 
const targetNumber=function(array,target){
    for(let i=0;i<=array.length-1;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
console.log("here comes the function expression:",targetNumber([34,46,54,44],54))