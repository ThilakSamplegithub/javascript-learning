// const b=11
// function x(){
//     let a=7;
//     function y(){
//         console.log(b)
//     }
//     y()
// }
// x()
// let val = 10;
// function outer() {
//   function inner() {
//     val++;
//     console.log(val);
//   }
//   inner();
// }
// outer();
// Go to inspect ==> sources==>pages==>search for js file==>then click on line number i.e debugger 
// and refresh to see it in scope
const data=[
  {name:"John",sub:"Html"},
  {name:"John",sub:"Js"},
  {name:"John",sub:"Css"},
  {name:"Pete",sub:"Java"},
  {name:"Pete",sub:"Ruby"},
  {name:"Pete",sub:"Maths"},
  {name:"Rusi",sub:"elm"},
  {name:"Rusi",sub:"Rust"},
]
const newData=data.reduce((acc,curr)=>{
  let newAcc=Object.keys(acc)
  console.log(newAcc)
  for(let keys of newAcc){
    if(keys===curr.name){
      acc[keys].push(curr.sub)
    }
  }
  return acc
},{
  John:[],
  Pete:[],
  Rusi:[]
})
console.log(newData)
