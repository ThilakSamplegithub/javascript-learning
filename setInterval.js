// after every prescribed interval it will comeup
console.log('script starts')
const id=setInterval(()=>{
    console.log('I came')
},1000)
console.log('script ends')
// if we want to stop it use its id in cleartimeout
console.log(id)
clearTimeout(id)
console.log(document.querySelector("body").innerHTML)
let btn=document.createElement('button')
btn.innerHTML='read more'
document.body.appendChild(btn)
// its color should change every second
setInterval(()=>{
    btn.style.backgroundcolor="red"
},1000)
// let btn = document.createElement("button");

// btn.innerHTML = "Read More";

// document.body.appendChild(btn);
