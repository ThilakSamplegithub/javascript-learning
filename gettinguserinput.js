let winningNumber=21;
let usernumber=+(prompt("guess a number"))//prompt function takes input as string so I can converted into string 
console.log(typeof usernumber,usernumber)
if(usernumber===winningNumber){
    console.log("u win")
}else{
    console.log("wrong guess")
}