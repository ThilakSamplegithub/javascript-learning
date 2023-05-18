// And operator
let firstName="Shilak"
let age=22
if(firstName[0]==="T" && age<=25){
    console.log("allow him")
}else{
    console.log("get out")
}
// using ternary operator
let allow = firstName[0]==="S" && age<=25?"allow him":"get out"
console.log(allow)
// or operator
let secondName = "vikram";
if(secondName[2]==="k" || age<=20){
    console.log("thats wah")
}else{
    console.log("what a wow")
}
//ternary way 
let third = secondName[1]==="k" || age<=20?"thats wah":"what a wow"
console.log(third)