// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
  function checkStones(j,s){
    j=j.trim().split('')
    let set=new Set(j)
    // console.log(set)
   return s.trim().split('').reduce((count,el)=>set.has(el)? ++count:count,0) // If I put count++ it will result 0
//    return co
  }
  let jewels = "aA", stones = "aAAbbbb"
   let s=checkStones(jewels,stones)
   console.log(s)
   let fi=new Array(5).fill(-1)
   console.log(fi)