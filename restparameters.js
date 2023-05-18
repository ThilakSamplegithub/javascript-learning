function addAll(...c){    // here all parameters are stored in array form in c using 3 dots
    console.log(c);
    console.log(typeof c);
    console.log(Array.isArray(c))
    let total = 0;
    for(let i=0;i<=c.length;i++){
        total=total+i;
         }
         console.log(total)
   }
const ans=addAll(1,2,3,4,5,6,7)
console.log(ans)
// to show how can we store rest of parameters:
function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log('c is ',c)

}
myFunc(1,2,3,4,5,6,7,7,8,6)