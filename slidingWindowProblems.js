// sum less than M
function lessThanM(n,k,arr){
    let sum=arr[0]
    let start=0
    let end=0
    let count=0
    while(end<n && start<n){
        if(sum<k){
            end++
            if(end>=start){
                count+=end-start
            }
            if(end<n){
                sum=sum+arr[end]
            }
        }else{
            sum-=arr[start]
            start++
        }
    }
    console.log(count)
}