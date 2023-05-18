//to print array elements one-by-one
/*let fruits=['apple','mangoes','grapes']
console.log(fruits)
for(let i=0;i<=fruits.length-1;i++){
    console.log(fruits[i])
}
//to uppercase
for(let i=0;i<=fruits.length-1;i++){
    console.log(fruits[i].toUpperCase())
}
let array=[]
for(let i=0;i<=fruits.length-1;i++){
    array.push(fruits[i])
}
console.log(array)
// remove last 3 items in array
let avengers=['loki','iron man','captian American','Thor','shaktiman']
for(i=1;i<=3;i++){
    avengers.pop()
}
console.log(avengers)
avengers.push('captain American','Thor','shaktiman')
console.log(avengers)
// print all except rrr
let movies=['matrix','bahubali','rrr','kgf','Endgame']
// then i need to skip 
for(let i=0;i<=movies.length-1;i++){
    if(i===2){
        continue;
    }
    console.log(movies[i])
}
//2nd Way if we don't know location of rrr in 1000's of files 
for(let i=0;i<movies.length;i++){
    if(movies[i]==='rrr'){
        continue;
    }
    console.log(movies[i])
    
}*/
// print last three elements of array
let arr=[1,3,5,7,921,43,55,41]
for(let i=arr.length-3;i<=arr.length-1;i++){  // let i=5 or let i=arrayname.lenth-last 3 elements
    console.log(arr[i])
}
// if i want last 5 elements
console.log("**********")
for(let i=arr.length-5;i<=arr.length-1;i++){
    console.log(arr[i])
}
console.log("***************")
// if i want to print 2nd half of array
// as array arr is having even length
for(let i=(arr.length)/2;i<=arr.length-1;i++){
    console.log(arr[i])
}
// if array is having odd length then
console.log(arr.push(34))
console.log(arr)
console.log('*******************')
// i want 2nd half of array from 921
let start
if(arr.length%2===0){
    start =(arr.length/2)
}else{
    start=((arr.length-1)/2)
}
for(let i=start;i<=arr.length-1;i++){
    console.log(arr[i])
}
console.log('******************')
// if i want from 43 then this time i will write directly
for(let i=(arr.length+1)/2;i<=arr.length-1;i++){
    console.log(arr[i])
}
console.log("***************")
// print sum of all elements
let sum =0
for(let i=0;i<=arr.length-1;i++){
    sum = sum+arr[i]
}
console.log(sum)
console.log('************************')
// print maximum among the elements
let note_book=-Infinity;
for(let i=0;i<=arr.length-1;i++){
    if(arr[i]>note_book){
        note_book=arr[i]
    }

}
console.log(note_book)
console.log("****************")
// if i want minimum number
let Notebook=Infinity
for(let i=0;i<=arr.length-1;i++){
    if(arr[i]<Notebook){
        Notebook=arr[i]
    }
}
console.log(Notebook)
   // palindrome 
   let num=1221
   let str=''
   str=str+num 
   let count2=0
   let count=0
   for(let i=str.length-1;i>=0;i--){
       if(str[i]===str[(str.length-1)-i]){
           count++
       }else{
           count2++
       }
       }
       if(count2!==0){
           console.log('No')
       }else{
           console.log('Yes')
       }  

     /*  Cart Total 
       Description
       
       You are given two arrays, both of given sizeN
       
       The first array represents the price of commodities present in your cart, represented by the variable nameprice
       
       The second array represents the quantity of each commodity that you need, represented by the variable namequantity
       
       You have to find the total price of the commodities present in the cart
       
       For example, consider the value stored inN = 3, and the first array isprice = [100,20,40], and the second array isquantity = [2,1,2]
       
       Then, the required cart total will be
       
       Cart Total = (100 * 2 + 20 * 1 + 40 * 2) = (200 + 20 + 80) = 300
       Therefore, the required output will be 300
       
       Input
       The first line of the input contains the value stored inN
       
       The next line containsNspace separated integers denoting the values stored in thepricearray
       
       The next line containsNspace separated integers denoting the values stored inquantityarray
       
       
       Output
       Print the total cart value, as shown in the problem statement
       
       Sample Input 1 
       
       3
       100 20 40
       2 1 2
       Sample Output 1
       
       300
       Hint
       
       In the sample test case, the value stored inN = 3, and the first array isprice = [100,20,40], and the second array isquantity = [2,1,2]
       
       Then, the required cart total will be
       Cart Total = (100 * 2 + 20 * 1 + 40 * 2) = (200 + 20 + 80) = 300
       Therefore, the required output will be 300
       Language: 
         
       Theme: 
       Font Size: 20*/
       
       /*function cartTotal(N, price, quantity) {
        let product=1
        let sum=0
        for(let i=0;i<=N-1;i++){
             
            sum=sum+(price[i]*quantity[i])
                
                }
                
                console.log(sum)
            }*/
           
          /*  Prime Sum Up Ended
            Description
            
            You are given a number, stored in a variable with the namenum. Find out the sum of all prime numbers in the range of [1,num], including the value stored innum
            
            
            Input
            The first and the only line of the input contains the value stored innum
            
            
            Output
            Print the sum of all prime numbers in the range of[1,num], includingnumitself
            
            
            Sample Input 1 
            
            13
            Sample Output 1
            
            41 */
            
       
       