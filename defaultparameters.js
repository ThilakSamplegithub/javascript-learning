function myFunc(a,b){
    console.log(a+b)
}
//myFunc(3)        // the result is NaN not a number bcoz argument of b is not passed

function myFunc2(a,b){
    if(typeof b==='undefined'){
        b=3;
    }
    return a+b
}
  console.log(myFunc2(4))
  //javascript new feature for default parameters
  function myFunc3(a,b=45){
    console.log(b)
    return a+b;
  }
console.log(myFunc3(4))