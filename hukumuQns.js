let arr=[1,2,3]
for(let i=0;i<arr.length;i++){
 const x= arr[i]
 setTimeout(()=>{
console.log(x)
 },i*2000)
}

const nayawala={
    firstName:"jannat",
    age:35
}
const obj={
    firstName:"john",
    age:30,
    greet:function(){
        console.log(`hello ${this.firstName} your age is ${this.age}`)
    }
}
const obj4=obj.greet.bind(nayawala)
obj4()
// const obj2=obj.greet.bind(obj)
// console.log(obj2())

function foo(){
return new Promise((resolve,reject)=>{
    if(true){
        resolve("success")
    }else{
        reject("failure")
    }
})
}
async function bar(){
    console.log("start")
const result=await foo()
console.log(result)
console.log("end")
}
bar()
console.log(" start outside")
console.log(" start outside 1")
console.log(" start outside 2")
console.log(" start outside 3")