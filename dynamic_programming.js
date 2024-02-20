// Sum of K exists or not
// 3 approaches
// 1.recursive approach,2.top-down approach,3.bottom-up approach
// function fun(n,t,arr){
//     // console.log(n,t,arr)
//     if(t===0){
//         return true
//     }
//     if(n===0){
//         return false
//     }
//     return fun(n-1,t-arr[n-1],arr)||fun(n-1,t,arr)
// }
// This is dynamic programming in top-down approach
// function fun(n,t,arr){
//     let dp=[]
//     for (let i = 0; i < n + 1; i++) {
//         dp.push([]);
//         for (let j = 0; j < t + 1; j++) {
//             dp[i].push(-1);
//         }
//     }
//     console.log(dp)
//   return fun2(n,t,arr,dp)
// }
// function fun2(n,t,arr,dp){
//         if(t===0){
//         return true
//     }
//     if(n===0){
//         return false
//     }
//     if(dp[n][t]!==-1){
//         return dp[n][t]
//     }else{
//         return dp[n][t]=fun(n-1,t-arr[n-1],arr)||fun(n-1,t,arr)
//     }
// }
//this is final bottom-up approach
function fun(n,t,arr){
    // console.log('hi')
    let dp=[]
    for (let i = 0; i < n + 1; i++) {
        dp.push([]);
        for (let j = 0; j < t + 1; j++) {
            dp[i].push(-1);
        }
    }
    let j=0
    while(j<t+1){
       dp[0][j++]=false
    }
    j=0
    while(j<n+1){
        dp[j++][0]=true
    }
    for(let i=1;i<n+1;i++){
        for(let j=1;j<t+1;j++){
        dp[i][j]=dp[i-1][j-arr[i-1]]||dp[i-1][j]
        }
    }
    // console.log(dp)
  return dp[n][t]
}
function runProgram(input)
{
    input=input.trim().split("\n")
    let n=+input[0]
    let arr=input[1].trim().split(" ").map(Number)
    let t=+input[2]
   fun(n,t,arr)?console.log("yes"):console.log("no")
}
if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }
 