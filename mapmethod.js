//function outside map
/*const numbers=[4,2,6,1,8]
function square(number){
    //return `number*number is ${number*number},index is ${index}` and donot forget to put additional parameter index
    return number*number
    //console.log(number*number) will show squared number and undefined elements in array so return is only used in map method
}
const SquareNumber=numbers.map(square);
console.log(SquareNumber) // map stores only in new array
// function inside map here i did created function using function declaration or function expression
const numbers1=[3,4,5,6,62]
const myNewsquare=numbers1.map(function(number){
    return number*number
})
console.log(myNewsquare)
// function inside map created using arrow function
const newSquareNumber=numbers.map((number)=>{
    return number*number
})
console.log(newSquareNumber)
// in realistic use object inside array
const users=[
    {firstName:'Thilak',age:28},
    {firstName:'harshit',age:23},
    {firstName:'saikiran',age:28},
    {firstName:'garima',age:27}
]
// i will create function inside map and access data inside in this way 1){key}
const userNames=users.map(function({firstName}){
    return firstName;
})
console.log(userNames)
// or 2nd way i.e dot or bracket notation
const userNames1=users.map((user)=>{
    return `${user.firstName},${user['age']}`
})
console.log(userNames1)*/
// give max no'of words in sentence here output is 6
let sentences =
["alice and bob love leetcode","i think so too","this is great thanks very much"]
// let se=sentences.map(el=>el.split(" "))
// console.log(se)

// let mostWordsFound=sentences=>{
//     return sentences.map(item=>{
//         return item.split(" ")}).sort((a,b)=>{
//             return b.length-a.length
//         })[0].length
    
// }
// const sent=mostWordsFound(sentences)
// console.log(sent)
// sentences => sentences.map(item => item.split(' ')).sort((a,b) => b.length - a.length)[0].length
 mostWordsFound=sentences=>{
    return sentences.map(item=>{
       return item.split(" ")
    })
 }
 let see= mostWordsFound(sentences)
 console.log(see)
 let see2=see.sort((a,b)=>b.length-a.length)
//  const see3=see(see)
 console.log(see2[0].length)
 // vivek sir given this problem used in real case scenario
 let prateekMarksData = {
    name: "Prateek",
    subject1: "Javascript",
    subject2: "HTML",
    subject3: "CSS",
    subject4: null,
    subject5: null,
    marks1: 90, 
    marks2: 81,
    marks3: 80,
    marks4: null,
    marks5: null,
  }
  
  let nrupulMarksData = {
    name: "Nrupul",
    subject1: "Java",
    subject2: "Pyton",
    subject3: null,
    subject4: null,
    subject5: null,
    marks1: 95, 
    marks2: 85,
    marks3: null,
    marks4: null,
    marks5: null,
  }
  
  let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
  
  let massagedData = allStudentsMarksData.map((item) => {
    let obj = {};
    
    obj['name'] = item.name;
    obj['marks'] = [];
    
    for (let i = 1; i <=5; i++){
      // item.subjecti && obj['marks'].push({subject: item.subjecti, score: item.marksi});
      item[`subject${i}`] && obj['marks'].push({subject: item[`subject${i}`], score: item[`marks${i}`]});
    }
    
    
    return obj;
  })
  
  console.log(massagedData);
  
  /*
   ------------------------------------------------
   massage the `allStudentsMarksData` to get a new 
   array called `massagedData`
  
   Instead of separate enties for 5 subjects and their marks,
   in the new array, we just have one entry called marks. 
   marks is an array of objects. the objects of marks
   contains subject and score.
   ------------------------------------------------
  
    Expected output from `massagedData`
  
    [
       {
         name: "Prateek", 
         marks: [
           {subject: 'Javascript', score: 90},
           {subject: 'HTML', score: 81},
           {subject: 'CSS', score: 80}
         ]
       },
       {
         name: "Nrupul", 
         marks: [
           {subject: 'Java', score: 95},
           {subject: 'Python', score: 85}
         ]
       },
  
    ]
  
  */