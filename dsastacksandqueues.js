function  nextGreater(n,arr){
    // console.log(n,arr)
    let arr2=[]
    let arrT=[...arr,...arr]
    // arrT=[...arr]
    //  console.log(arrT)
    for(let i=0;i<n;i++){
        let temp=i
        // console.log(temp)
        let count=0
        for(let j=temp+1;j<2*n;j++){
            if(arr[temp]<arrT[j]){
                // console.log(arrT[j])
               arr2.push(arrT[j])
               count++
               break;
            }
        }
        if(count===0){
            arr2.push(-1)
        }
    }
    console.log(arr2)
}
let arr=[1,2,1]
nextGreater(3,arr)
//turning point of problem as I must search circular for next greater element I just need to add twice same array
// this is signal capacity problem
function  signalsCapacity(n,arr){
    // console.log(n,arr)
    let stack=[]
    let ans=[]
    for(let i=0;i<n;i++){
        let count=0
        while(stack.length!==0 && arr[stack[stack.length-1]]<=arr[i]){
           count=count+ans[stack[stack.length-1]]
            stack.pop()
            // count++
        }
        if(stack.length===0){
            ans.push(count+1)
        }else if(arr[stack[stack.length-1]]>arr[i]){
            ans.push(count+1)
        }
        stack.push(i)
    }
    console.log(ans.join(' '))
}
// here is input
// 2
// 7
// 100 80 60 70 60 75 85
// 5
// 3 5 0 9 8
function uniqueGift(str){
    // console.log(str)
    let ans=[]
    let obj={}
    let queue=[]
    let fr=0
    let re=0
    for(let i=0;i<str.length;i++){
        if(obj[str[i]]===undefined){
            obj[str[i]]=1
            queue[re]=str[i]
            // ans.push(queue[fr])
            re++
        }else{
            obj[str[i]]++
        }
        while(fr<re){
            if(obj[queue[fr]]===1){
                break;
            }
            fr++
        }
        if(fr===re){
            ans.push("#")
        }else{
            ans.push(queue[fr])
        }
       
    }
    console.log(ans.join(""))
} 
uniqueGift(yytexfzntvbtwnjhkfzr)
// y#tttttteeeeeeeeeeee is expected output