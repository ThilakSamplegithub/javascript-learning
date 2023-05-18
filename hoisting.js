// Its all about js works 1st compilation where it compiles ALL code before executing 1st line of code
// compilation : 1.lexical or tokenization phase 2)--  3) -- then code generation format is availed 
// in compilation js know scope of variable although variables are not created
// execution starts with 1.Global execution context (which constist of creationphase then code execution)
// in creation phase see window this in notes but note variables are created and stored in global memory in stack

// 1st we will use var
console.log(firstName)   // I got undefined thats how my variable is createda and stored in global memory by global execution context after compiling
// compiling js has knowledge that firstName variable is global scoped
var firstName="Thilak"
console.log(firstName)
// now lets see for let and const
//console.log(secondName) // Uncaught ReferenceError: Cannot access 'secondName' before initialization
// let is useless until initialized but it is also stored like var in global memory just not initialized but hoisted see proof in line11
//let secondName='singh'
//console.log(secondName)
//console.log(whatsapp) // ncaught ReferenceError: whatsapp is not defined u can see this after commenting out above one
// it doesn't say uninitialized  
// so am initializing let 
let secondName='singh'
console.log(secondName)
//now its time for const
//console.log(initalName)  // same as let 1st initialize it until its useless
//const initalName='Thakur'
// now its time for function
// function declaration
// lets hoist before declaration
console.log(myFunc) // I got print of total function because its stored in global memory due to keyword function and this myFunc is in global scope
myFunc()
function myFunc(){
    console.log('this is my function')
}
// now lets see in the case of function expression using var
console.log(myFunc2)
var myFunc2=function(){
    console.log('this is myFunc2')
}
console.log(myFunc2)
// now les see let or const
//console.log(myFunc3)  // same uninitialized bcoz its hoisted
/*const myFunc3=function(){
    console.log('this is myFunc3')
}
console.log(myFunc3)*/
// let me show small difference between let and const
//let name
//console.log(name) // I got undefined 

//const onatherName  
//console.log(onatherName)  // i will get error
// let and const inspite intialized but G.e.c first assigns unitialized till certain time is known as temporal dead zone (tdz) and then initializes whatever we gave
window.myFunc()
this.myFunc()
'use strict'
function junctionlo(){
   "use strict"
    console.log(this)
}
junctionlo()
//console.log(window.junctionlo)
//window.junctionlo()
function about(hobbies,dream){
    console.log(this.person,this.age,hobbies,dream)
}
//about.call(users)

myFunc2.call()
const users={
    person:'Harshit',
    age:28,
}
//users.about.call(users)
//users
const user2={
 person:'mohit',
 age:31
}
about.call(user2,"dancing",'powerful')
about.call(users,"popping","chapping")
// converting 1d to 2d array
let arr2=[1,2,3,4]
let mat=[]
let part=2
for(let i=0;i<arr2.length;i=i+part){
    mat.push(arr2.slice(i,i+part))
    //console.log(mat)
}
console.log("mat:",mat)
const arr = [1,2,3,4,5,6,7,8,9];
    
const newArr = [];
while(arr.length){ 
newArr.push(arr.splice(0,3));
}  
console.log(newArr);
let str='kdljgljeri'
console.log(str.slice(2,5))
let arr8=[4,56,6]
let arrw=arr8.slice(0)
console.log(arrw)
let arrs=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
part=4
let matrix=[]
for(let i=0;i<arrs.length;i=i+part){
 matrix.push(arrs.slice(i,i+part))
}
console.log(matrix)
const twod=[]
//let unk=[]
 twod.push(new Array(5).fill(0))
console.log(twod)
let arrse=new Array(5).fill()
console.log(arrse)
let aa=[]
console.log(aa[0])
let filling=new Array(4).fill(0)
console.log(filling)
part=2
let matrix2=[]
for(let i=0;i<filling.length;i+=part){
    matrix2.push(filling.slice(i,i+part))
}
console.log(matrix2)
 function construct(n,m){
    this.name=n
    this.age=m
 }
 let person=new construct('ravi',32)
 console.log(person)



