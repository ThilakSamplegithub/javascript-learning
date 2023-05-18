let num1= 56;
let num2= 45;
console.log(num1<num2);
console.log(num1>num2);
console.log(num1>=num2);
console.log(num1<=num2);
// equalto vs tripleequalto
//==
let num3= 45;//it is a number
let num4= "45";//it is string
console.log(num3==num4);//== is ignore datatype that is speciality unlike other programming languages when used == and === 
//=== will not ignore datatypes
console.log(num3===num4);
console.log(num3===num1);
//!=vs!==(not equal to)
console.log(num1!=num2);
let vare = "45";
console.log(num1!=vare);//string datatype is ignored in !=
console.log(num2!=vare);
//!== 
console.log(num1!==vare)//here datatype is not ignored inspite both r equal
console.log(num1!==num2);
