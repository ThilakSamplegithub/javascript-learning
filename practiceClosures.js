// const b=11
// function x(){
//     let a=7;
//     function y(){
//         console.log(b)
//     }
//     y()
// }
// x()
let val = 10;
function outer() {
  function inner() {
    val++;
    console.log(val);
  }
  inner();
}
outer();
// Go to inspect ==> sources==>pages==>search for js file==>then click on line number i.e debugger 
// and refresh to see it in scope
