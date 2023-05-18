// we will create Array using class \
class ourArray{
    constructor(){
        this.arr=[]
        this.length=0
    }
    isEmpty(){
        let s=this.arr.length===0?true:false
        console.log(s)
    }
    addArrar(x){
        this.arr[this.length]=x
        this.length++
    }
}
let arr1=new ourArray()
arr1.isEmpty()
arr1.addArrar(5)
console.log(arr1)
// now we will create stack push pop operations
// class ourArray2{
//     constructor(){
//         this.arr=[]
//         this.length=0
//     }
//     isEmpty(){
//         let s=this.arr.length===0?true:false
//         console.log(s)
//     }
//     push(x){
//         this.arr[this.length]=x
//         this.length++
//     }
//     pop(){
//         if(this.length===0){
//             console.log('underflow')
//         }else{
//             // console.log(this.arr)
//             this.length--
//             console.log(this.arr.pop())
//         }
        
//     }
// }
// let arr2=new ourArray2()
// arr2.push(5)
// arr2.push(6)
// console.log(arr2)
// arr2.pop()
// console.log(arr2)