// assigning arrays to other array is not cloning
let array1=["apples","mangoes","grapes"];
let array2=array1;
console.log(array1)
console.log(array2)
array1.push("banana","papaya")
console.log(array1)
console.log(typeof array1)
// as there are many objects so I want to ensure its array
console.log(Array.isArray(array1))
//lets make clone i.e copy which will have 2 different adresses by traditional way
let fruits1=["item1","item2"]
let fruits2=["item1","item2"]
console.log(fruits1)
console.log(fruits2)
// now lets check whether both have similar adresses also
fruits1.push("item3")
console.log(fruits1)
console.log(fruits2);
//hence proved
//otherways:slice method
fruits3=fruits2.slice(0)
console.log(fruits3)
fruits2.push("item4")
console.log(fruits2)
console.log(fruits3)
//2.concatenation method
let fruits4=[].concat(fruits3)
console.log(fruits4)
fruits3.push("item5")
console.log(fruits3)
console.log(fruits4)
//3.spread operator
let fruits5=[...fruits4]
console.log(fruits4)
console.log(fruits5)
fruits4.push("item6")
console.log(fruits4)
console.log(fruits5)
//add extra-elements in array along with cloning using 
let fruits8=fruits5.slice(0).concat("item11","item12")
let fruits7=[].concat(fruits5,"item9","item10")//using concat method 
let fruits6=[...fruits5,"items7","items8"]//using spread operator
console.log( "extra elements r added to cloned array using spread operator",fruits6)
console.log("extra elements r added to cloned array using concat",fruits7)
console.log("extra elements r added to cloned array using slice method",fruits8)
//till know we cloned arrays now we r to add arrays into new array
let onemorearray= ["kiwi","guava"]
let array3=[...fruits8,...onemorearray]
console.log("after adding 2arrays", array3);

