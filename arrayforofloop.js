const array1=["item1","item2"]
const array2=[]
for(let arrays of array1){     // automatically length of array is defined in forofloop, here 2times loop runs 
console.log(arrays)          // just inplace of i here arrays r there
}
// now let's do uppercase
for(let arrays of array1){
    console.log(arrays.toUpperCase())          // just inplace of i here arrays r there
    }
    // now I wanna new array 
    for(let arrays of array1){
        array2.push(arrays.toUpperCase())
                  }
                  console.log(array2)
   
                  
        // for in loop
        const array4=[]
        const array3=["item3","item4","item5"]
        for(let arrays in array3){
            console.log(arrays)
            console.log(array3[arrays])
            console.log(array3[arrays].toUpperCase())
            array4.push(array3[arrays].toUpperCase())
        }
console.log(array4)

//just additional operations for timepass
console.log(array4.length)
console.log(array4.slice(1))