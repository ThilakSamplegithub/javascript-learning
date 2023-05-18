// without using recursion
function happyNumber(arr){
    let m,n
    let seen=new Set()
    let obj={}
    while(true){
        m=0
        while(arr>0){
           n=arr%10
            m+=n*n
            arr=Math.floor((arr-n)/10)
        }
        arr=m
        if(m===1){
            return "Yes"
        }else if(obj[m]===undefined){
            obj[m]=1
        }else if(obj[m]!==undefined){
            return 'No'
        }
    }
}