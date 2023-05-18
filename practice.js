// // to add aman to amaun
// /*let str='AmAn'
// let bag=''
// for(let i=0;i<=str.length-1;i++){
//     bag=bag+str[i]
//     if(str[i]=='A' && i==2){
//         bag=bag+'u'
//     }
// }
//  console.log(bag)
//  let bag1=''
//  for(let i=0;i<=str.length-1;i++){
// if(str[i]=='A' && i===2){
//     bag1=bag1+'A'+'U'
// }else{
//     bag1=bag1+str[i]
// }
//  }
//  console.log(bag1)
 
// // Problem 3 : Given an array of string count the overall total number of characters
// let arr=['harshit','Thilak','Mohit',' ','harry123']
// let count =0
// for(let i=0;i<=arr.length-1;i++){
//  for(let j=0;j<=arr[i].length-1;j++){
//    count++
//  } 
// }
// console.log(count)
// // change characteer into uppercase
// let char='j'
// let upperCase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// let lowerCase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// for(let i=0;i<=lowerCase.length-1;i++){
//     if(char===lowerCase[i]){
//         char=upperCase[i]
//     }
// }
// console.log(char)
// for(let i=1;i<=5;i++){
//     let bag=''
//     for(let j=1;j<=5;j++){
//         if(i==2||i===3||i===4){
//             if(j===2||j===3||j===4){
//                 bag=bag+' '
//             }else{
//                 bag=bag+'*'
//             }
//         }else{
//             bag=bag+'*'
//         }
//     }
//     console.log(bag)
// }
// let left=4
// let right=10
// for(let i=left;i<=right;i++){
//     console.log(i)
//     let product=2*i
//      i=product-1

// }
// /*PROBLEM 2
// Problem 2
// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function*/
// /*let animals=['dodo','tiger','penguins','dodo']

// let choice
// for(let i=animals.length-1;i>=0;i--){
//   if('dodo'===animals[i] && choice==undefined){
//     console.log(i)
//     break
//   }else if('dodo'==animals[i] && i==choice){
//     for(let j=choice;j>=0;j--){
//       console.log(i)
//       break
//     }
    
//   }else if('dodo'!==animals[i]){
//  console.log('-1')
//     break;
//   }
// }
// let str1='naman'
// let bag2=''
// for(let i=str1.length-1;i>=0;i++){
//   bag2=bag2+str1[i]   
// }
// if(bag2==str1){
//     console.log('true')
// }else{
//     console.log('false')
// }*/
// let star='the thereere theree whatsup'
// console.log(star.split(" "))
// let arr=[23,4,56,66,53]
// const arr1=arr.slice(0,3)
// console.log(arr1)
// const arr2=arr.slice(0)
// console.log(arr2)
// console.log(arr.slice())
// let str='mozilla'
// console.log(str.substring(2,6))
// const users={
//     name:'Thilak',
//     age:28,
//     hobbies:['reading books','see wwe','listening misic'],
//     person: function(){
//         console.log(this.hobbies)
//     }
// }
// const users2={
//     name:'Thalaiva',
//     age:28,
//     hobbies:['reading books','see wwe','listening misic','seeing movies'],
//     person: function(){
//         console.log(this.hobbies)
//     }
// }
// users.person.call(users2)
// let astr='ababaa'
// console.log(astr.substring(0,5))
// // 
// let ar=[['a','b','c'],
//        ['d','e','f'],
//        ['g','h','k']]
//    let row=ar.length
//     console.log(row) 
//     let col=ar[0].length
//     console.log(col)   
//  //let col=3
//  for(let i=0;i<row;i++){
//     for(let j=0;j<col;j++){
//         console.log(ar[i][j])
//     }
//  }
//  // if i
//  let str1="manikemani"
//   let st=str1.slice(9)
//   console.log(st)
//   console.log(str1.slice(2,5))
//  let n="121"
//   n=n.slice(0,n.length-1)
//   console.log(n)
//   // truthy and falsy value
//   let stack=[]
//   let s= stack===[] ? "Balanced" : "not balanced"
//   console.log(s)
//   if(stack===[]){
//     console.log("Balanced")
//   }else{
//     console.log("not balanced")
//   }

// //   queries to be clarified
// // 1).let stack=[]
// //   let s= stack===[] ? "Balanced" : "not balanced"
// //  2)problem related to name and no of subjects:Sir I have implemented with your approach and did dry runned but I have if else approach
// // whre I have doubt acc[item.name]=arr.push(item[subject])  gives me no of iterations john,pete and mary has but 
// //  when I write in seperate line:arr.push(item[subject])and onather line:acc[item.name]=arr I get expected output
// //  y is it happening? 

// var x=7

// let ryo={
//   x:1,
//   go:{
//     x:2,
//     show:function(){
//       return this.x
// }  
// }    
// }

// let ansfunc=ryo.go.show
// console.log(ansfunc())
// // *******************************************
// var x=7

//  ryo={
//   x:1,
//   go:{
//     x:2,
//     show:function(){
//       return this.x
// }  
// }    
// }
// console.log(ryo.go.show())
// let data = [
//   { name: "John", subject: "Javascript" },
//   { name: "John", subject: "HTML" },
//   { name: "John", subject: "CSS" },
//   { name: "Pete", subject: "Java" },
//   { name: "Pete", subject: "English" },
//   { name: "Pete", subject: "Maths" },
//   { name: "Mary", subject: "Rust" },
//   { name: "Mary", subject: "Elm" },
// ]

// // let subjectHash = data.reduce((acc, item) => {
// //   acc[{item}]=acc[{item}]||[]
// //   acc[{item}].push({subject})
// //   // iteration 1 - acc: {}
// //   // iteration 1 - item: { name: "John", subject: "Javascript" }

  
  
// //   // iteraction 1 - acc:
// //   return acc;
// // }, {})
// const oj={ name: "John", subject: "Javascript" }
// let subjectHash=function({name,subject}){
//   return name+" "+subject
// }

// console.log(subjectHash(oj));
// let subj=data.map(({name,subject})=>{
//   return name+" "+subject
// })
// console.log(subj)
// /*
// Expected output:
// {
//   John: ["Javascript", "HTML", "CSS"],
//   Pete: ["Java", "English", "Maths"],
//   Mary: ["Rust", "Elm"]
// }
// */
// candies = [2,3,5,1,3]
// extraCandies = 3
// let noteBook=-Infinity
//     let n1=candies.length
//     for(let i=0;i<n1;i++){
//     if(candies[i]>noteBook){
//         noteBook=candies[i]
//     }
//     }
//     let res=candies.map((el)=>{
//         let l=el+extraCandies
//         let sp=l>=noteBook?true:false
//         // if(l>=noteBook){
//         //     return "true"
//         // }else{
//         //     return "false"
//         // }
//         return sp
//     })
  //  console.log(res) 
//    console.log("starts")
//    let promise=new Promise((resolve,reject)=>{
//     console.log('whats up')
//     resolve(5)
//    })
//    promise.then(()=>{console.log(5)})
//    console.log('ends')
//   //  const promise1 = new Promise((resolve, reject) => {
//   //   console.log(1);
//   //   resolve('success')
//   // });
//   // promise1.then(() => {
//   //   console.log(3);
//   // });
//   // console.log(4);
  
// async function f() {
//   let result = 'bahubali';
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('ironman'), 1000);
//   });

//   result = await promise;
//   console.log(result);
//   for(let i=0;i<5;i++){
//     console.log(i)
//   }
// }

// f();



// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
// export default Product;
var a=10
function f1(){
  return function(){
    console.log(a)
  }
  var a=20
}
var f2=f1()
f2()
let str2='4'
let input = str2.trim().split(' ').map(Number)
console.log(input)
// this is  banana problem
// // There is a contest of Competitive eating. Rick and Richard were participating in the game.

// N bananas are placed in a line. Rick starts to eat from left to right, and Richard from right to left. For each banana, its length is known.

// Rick eats with speed twice that of Richard. If a player starts to eat the banana, other player can't touch it. If both players reach the same banana simultaneously, Rick gets to eat that banana as he snatches it away from Richard.

// How many bananas each of the players will eat?
// input
// 5
// 2 9 8 2 7
// output:3 2                 
function richard(n,arr){
  // console.log(n,arr)
  let l=0
  let r=n-1
  let sum=0
  sum=arr[l]
  let sum2=0
  sum2=arr[r]
  let count1=1
  let count2=1
  while(r-l>1){      // here we can write as Instructor said r-l!==1
      //  sum=sum+arr[l]
       if(sum<=sum2*2){
           l++
           sum=sum+arr[l]
           count1++
          //  console.log(sum+' '+count1+" "+arr[r]*2)
       }else if(sum>sum2*2){
        r--
             sum2=sum2+arr[r]
             if(l<r){
              count2++   
             }
            //  sum=0
         }
    }
    console.log(`${count1} ${count2}`)
    
}