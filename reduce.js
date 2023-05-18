const numbers=[1,2,3,4,,5,6,7,8]
// i will use  function outside
function totality(accumulator,currentvalue){
    return accumulator+currentvalue
}
const ans=numbers.reduce(totality)
console.log(ans)
// function inside
const anse=numbers.reduce(function(accumulator,currentvalue){
    return accumulator+currentvalue
})
console.log(anse)
// now using arrow function with single statement
const ansee=numbers.reduce((accumulator,currentvalue)=>accumulator+currentvalue,100)
console.log(ansee)
// realistic sense
const userCart=[
    {userId:1,productName:'mobile',price:23490},
    {userId:2,productName:'tv',price:54490},
    {userId:3,productName:'laptop',price:133490},
    {userId:4,productName:'ac',price:234900}
]
// using arrow function without return
const dana=userCart.reduce((totalprice,currentprice)=>totalprice+currentprice.price,0) // after callback function intialized totalprice=0
console.log(dana)
// using arrow function with return 
const totalpricep=userCart.reduce((totalprice,currentproduct)=>{
    return totalprice+currentproduct.price
},0)
console.log(totalpricep)
// from here we can see excellent use of reduce method in js referred from instructor vivek sir
// let developers_array = [
//     {
//       first: "John",
//       last: "Doe",
//       dept: "FE",
//       commits: 10
//     },
//     {
//       first: "Jane",
//       last: "Doe",
//       dept: "BE",
//       commits: 15
//     },
//     {
//       first: "James",
//       last: "bond",
//       dept: "BE",
//       commits: 8
//     }
//   ];
  
//   //   { BE: [James, Jane], FE: [John] }
  
//   // let reduced_array = developers_array.reduce(
//   //   function (accumulator, item) {
//   //     item.dept === "BE"
//   //       ? accumulator.BE.push(item.first)
//   //       : accumulator.FE.push(item.first);
//   //     return accumulator;
//   //   },
//   //   { BE: [], FE: [] }
//   // );
  
//   let reduced_array = developers_array.reduce(function (acc, item) {
//     return acc + item.commits;
//   }, 0);
  
//   console.log(reduced_array);
//   // { starDeveloper: 'Jane', commits: 15 }
//   let noteBook=-Infinity
//   let maxComm = developers_array.reduce((acc,item)=>{
//     if(item.commits>noteBook){
//       noteBook=item.commits
//       acc.starDeveloper=item.first
//       acc.commits=item.commits
//     }
//     return acc
//   },{})
//   console.log(maxComm)
// do above problem with map
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersGreetings = users.reduce((acc,el)=>{
//                                   return acc.push("Hi from",el.name+" "+el.surname,".")
//                                                   },[])   


// console.log(usersGreetings) // ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

// let usersMapped = users.reduce((acc,el)=>{
//     let obj={}
//   obj.fullName=`${el.name} ${el.surname}`
//     obj.id=el.id
//   return acc  dont return acc.push(obj) only acc
// },[]) 
// console.log(usersMapped)
// let obj={}
//   obj.fullName=`${john.name} ${john.surname} `
//     obj.id=john.id
//     console.log(obj)
//     let acc=[]
//     acc.push(obj)
//     console.log(acc)
let data = [
    { name: "John", subject: "Javascript" },
    { name: "John", subject: "HTML" },
    { name: "John", subject: "CSS" },
    { name: "Pete", subject: "Java" },
    { name: "Pete", subject: "English" },
    { name: "Pete", subject: "Maths" },
    { name: "Mary", subject: "Rust" },
    { name: "Mary", subject: "Elm" },
  ]
  let subjectHash=data.reduce((acc,el)=>{
    acc[el.name]=acc[el.name]||[]           // this is during logical operators
    acc[el.name].push(el.subject)
    return acc
  },{})
  console.log(subjectHash);
// This is 2nd method I did using if else condition but logical operators are used much by developers
  let arr=[]
  let pre=-1
  let bruteWay=data.reduce((acc,el)=>{
     if(pre!==el.name){
      arr=[]
      acc[el.name]=arr.push(el.subject)
    }else{
      arr.push(el.subject)
      acc[el.name]=arr
    }
    pre=el.name
    return acc
  },{})
  console.log(bruteWay)
  // /////////////
  
  let subjectsData = [
    {id: 1, name: 'Javascript'},
    {id: 2, name: 'HTML'},
    {id: 3, name: 'CSS'},
    {id: 4, name: 'Java'},
    {id: 5, name: 'Rust'},
  ]
  
  // code your key-value object for subjects here
  
  let students = [
    {id: 1, name: 'Prateek', subjectID: 5},
    {id: 2, name: 'Yogesh', subjectID: 2},
    {id: 3, name: 'Nrupul', subjectID: 4},
    {id: 4, name: 'Prateek', subjectID: 1},
  ]
  // here to access data from specific things objects inside array based on some matchings we can convert the data into object data type and access it easily
  const subjectHashmapData=subjectsData.reduce((acc,el)=>{
    acc[el.id]=el.name
    return acc
  },{})
   let newObj=students.reduce((acc,el)=>{
    acc[el.name]=acc[el.name]||[]
    acc[el.name].push(subjectHashmapData[el.subjectID])
      return acc
       },{})
  // let newObj = {/* your array method here */}
  console.log(newObj);

  // using forEachmethod is 2nd method but hashmap method i.e using reduce we made into object

  function getElementbyid(id){
    let subjectName=''
    subjectsData.forEach((item)=>{
       if(item.id===id){
        subjectName=item.name
       }
    })
    return subjectName
  }
   let newObj2ndmethod=students.reduce((acc,el)=>{
   acc[el.name]=acc[el.name]||[]
   let s=getElementbyid(el.subjectID)
   acc[el.name].push(s)
   return acc
   },{})
   console.log(newObj2ndmethod)
  // console.log(obj1)
  /* 
  ----------------------------------
  create a new object called `newObj` using the `students` array &  
  the `subjectsData` array.
  
  Hint: consider creating an extra key-value object for quickly accessing subject names
  ----------------------------------
  
  Expected Output of `newObj`: 
  {
    Prateek: ["Rust", "Javascript"],
    Yogesh: ["HTML"],
    Nrupul: ["Java"],
  }
  */

  

