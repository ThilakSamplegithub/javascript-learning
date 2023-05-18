// reverse function
// console.log(1)
function reverse(n){
    let l=n.length
    for(let i=0;i<Math.floor(l/2);i++){
        let temp=n[i]
        n[i]=n[l-1-i]
        n[l-1-i]=temp
    }
    let temp2=''
    for(let i=0;i<n.length;i++){
        temp2=temp2+n[i]
    }
    return temp2
}
let num=121
num=String(num)
console.log(typeof num)
let arr=new Array(num.length)
for(let i=0;i<num.length;i++){
    arr[i]=num[i]
}
let count=0
let r=reverse(arr)
console.log(r)
let k=num.length
for(let i=0;i<k;i++){
    if(num[i]===r[i]){
        count++
    }
}
console.log(count)
if(count===k){
    console.log('its palindrome')
}else{
    console.log('not a palindrome')
}
let str=String(675)
console.log(typeof str)
str='kdkl'
console.log(str)
str=str+'kslj'
console.log(str)