// find power of any term using closures means function returning function
function myFunc(power){
   return  function(number){
            return number**power
      }
}
const cube=myFunc(6)
const ans=cube(3)
console.log(ans)
// now lets see application of closures
// if i tried to call function morethan once I should get onather comment
function func(){
      let counter=0
      return function(){
            if(counter<1){
                  console.log('hi')
                  counter++
            }else{
                  console.log("you have already called me")
            }
      }
}
const myFunc2=func()
console.log(myFunc2 )
myFunc2()
myFunc2()
const myFuncaa=func()
myFuncaa()
myFuncaa()

