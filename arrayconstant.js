let array1 = ['item1','item2']
array1 = ['item6','item2'] 
console.log(array1)//here output will be latest assigned item6,item2 not array1 items
const array2=["item2","item3"]
//const array2=["ierkjfdm","ijgiogj"] : i got error because constant can't be declared again like let so most developers use const for reference data type
array2.unshift("item4","item5")
console.log(array2)
array2.push("item4","item5")
console.log(array2)
let array3=[...array1,...array2]
console.log(array3)
