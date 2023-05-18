// let and const r block scope 
{
    let chary="shukreoddin"
    console.log(chary)
    const junctionlo='chammak challu'
    console.log(junctionlo)
}
//console.log(chary)  // when i tried to print chary which is out of block i see result as  chary is not defined
//console.log(junctionlo)// here i tried to print junctionlo but no result as junctionlo is not defined
// var is function scope (global scoope is also function scope)
{
    var funny='laefmjfjfke'
    console.log(funny)
}
console.log(funny)   // here printed because we used var
// usage of blocks are :
// for eg:
function myFunc(){
    if(true){
        let firstName='roti'
        console.log(firstName)
    }
    if(true){
        const nextName='khalo'
        console.log(nextName)
    }
    if(true){
        var secondName='nickname'
        console.log(secondName)
    }
    console.log(secondName)
    if(true){
        console.log(secondName)
    }
}
myFunc()
// console.log(firstName) not defined bcoz i used let
//console.log(secondName)
//console.log(nextName)
let firstName='jaffa'
console.log(firstName)
const nextName='lukachuppi'
console.log(nextName)
//console.log(secondName) // var is accessible inside function no matter in which block is defined no matter how many blocks that function have
console.log('i defind funny using var but in a block not inside function so by default comes under global function:',funny,':so var is called is called function call')