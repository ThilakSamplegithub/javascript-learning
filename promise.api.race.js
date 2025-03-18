// Promise.race gives 1st settled promise whether  its success or failure
const p1=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve('p1 success'),5000)
    
    }
})
const p2=new Promise((resolve,reject)=>{
    if(true){
        // setTimeout(()=>resolve('p2 Success'),1000)
        setTimeout(()=>reject('p2 failure'),1000)//Here results when it encounters failure
        // so promise.all is fail fast otherwise it waits untill longer time
 
    }
})
const p3=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve('p3 success'),2000)
     
    }
})
Promise.race([p1,p2,p3])
.then(result=>console.log(result))
.catch(err=>console.error(err))