const fruits=["apples","mangoes","grapes","banana"]
let i=0
while(i<=fruits.length-1){
    console.log(fruits[i])
    i++
}
//uppercase
let n=0;
while(n<=fruits.length-1){
    console.log(fruits[n].toUpperCase())
    n++;
}
//add new array
const fruits2=[]
let m =0
while(m<=fruits.length-1){
    console.log(fruits2.push(fruits[m]))
    m++
}
console.log(fruits2)