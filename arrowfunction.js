//here we will use function expression then we'll convert  into arrow function
//const singHappybirthday=function(){
  //  console.log('happy birthday to u.....');
//}
//singHappybirthday();
// arrow function
const singHappybirthday=()=>{
    console.log('happy birthday to u.....')
}
singHappybirthday();
// sum of 2 numbers using function expression
//const sumtwonumbers=function(num1,num2){
  //  return num1+num2;
//}
//console.log(sumtwonumbers(34,43))
// sum of 2numbers using arrow function 
const sumtwonumbers=(num1,num2)=>{
    return num1+num2;
}
console.log(sumtwonumbers(34,43))
// multiplication of 3numbers using function expression
const mul=function(num1,num2,num3){
    return num1*num2*num3;
}
console.log(mul(35,4,55));
// multiplication of 3 numbers using arrow function
const mult=(num1,num2,num3)=>{
    return num1*num2*num3;
}
console.log('here multiplication of 3numbers represented by arrow function is ',mult(35,4,44));
// 1st character in string
const firstChar=function(anystring){
    return anystring[0];
}
console.log('this is using function expression :',firstChar('jaffa'))
// arrow function
const firstchaR=(anystring)=>{
    return anystring[0];
}
console.log('here using arrow function:',firstchaR('swapnalokam'))
// find targeted index in string
const targetIndex=function(anystring,target){
    for(let i=0;i<=anystring.length-1;i++){
        if(anystring[i]===target){
            return i;
        }
    }return -1;
}
console.log('function expression is:',targetIndex('krishna','h'))
// using arrow function 
const targetinDex=(anystring,target)=>{
    for(let i=0;i<=anystring.length-1;i++){
        if(anystring[i]===target){
            return i;
        }
    }return -3;
}
console.log('hence arrow function is: ',targetinDex('radha','d'))
// find targeted element in array using arrow function:
const targeT=(array,target)=>{
    for(let i=0;i<=array.length-1;i++){
        if(array[i]===target){
            return i;
        }
    }return -6
}
console.log('here comes the arrow function:',targeT([3,45,56,32,2243,5],32))