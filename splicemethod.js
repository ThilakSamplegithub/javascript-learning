const  numbers=[2,3,4,5,1,6,]
const  numbers1=[2,3,4,5,1,6,11]
const  numbers2=[22,3,41,51,1,6,11]
// to delete element '5'only
const deleteditem=numbers.splice(3,1)
console.log(deleteditem)
console.log(numbers)
//here i would like to insert 'inserted item'
const deletee=numbers1.splice(4,1,'inserted item')
console.log(numbers1)
console.log(deletee)
// now we will delete and insert
const ansdeleted=numbers2.splice(1,3,'inserteditm1','item2','item3')
console.log(ansdeleted)
console.log(numbers2)
let arr=[1,3,4,5,54]
let arr1=[5]
 arr1=arr.splice(2,0,"insert")
console.log(arr,'this is arr1')
//just to insert elements
let output=[]
output.splice(0,0,"yes")
output.splice(0,0,56)
console.log(output)