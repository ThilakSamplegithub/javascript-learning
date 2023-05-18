let firstName = "harshit";
let age = "345";//if anything is inbetween "" it is string only. if i wanna convert number into string
console.log(typeof firstName);
console.log(typeof age);
let numb= 45;
console.log(typeof numb);
// present directly without defining it
console.log(typeof "thilsl");//to check string directly
console.log(typeof 67)//to check number
//to convert string into number by using '+' or number
age = +"345";//sting is converted into number by putting "+" before string
console.log(typeof age);
let string = "thihll";
console.log(typeof(string));
string= Number(string)//to convert string into number
console.log(typeof(string));
//convert number into string either by using +""after variable name or use string(variable name)
let newnumb= 7765;
console.log(typeof newnumb)
newnumb=String(newnumb);//in string "S" is capital
console.log(typeof newnumb);
//or
console.log(typeof newnumb+"")
// or
newnumb = newnumb+"";// this is onather way 
console.log(typeof newnumb)
// undefined
let first ;
console.log(typeof first);
// null is bug(error) deliberately not fixed
console.log(typeof null)
