const stocks={
    fruits:['strawberry','grapes','banana','apple'],
    liquids:['water','ice'],
    holders:['cone','cup','plastic sticks'],
    toppings:['chocolate','peanuts']
}
// 1st know whether shop is open or not
let is_shop_open=false
// if open we fulfil our promise that we will serve icecream
const order=(time,work)=>{
    // lets make now promise 
    return new Promise((resolve,reject)=>{ 
        if(is_shop_open){       // as per icecream project we have 2 consequences of promise i.e reject or resolve
            setTimeout(()=>{
                resolve(work())     // we made work as function call as we will give it serial of functions of all 7 steps
            },time)
        }else{
            reject(console.log('our shop is closed'))
        }
    })
}
order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))  // place the order is 1st step after 2 sec
// note 1: dont put ; between order and then() note2:when using then() use only return if used console every thing will be printed but timefunction will not be applied except for 1st order


.then(()=>{
    return order(0000,()=>console.log('start the production')) // must always use return at 1st in arrow function while using then()
})  // start the production at o sec


.then(()=>{
    return order(2000,()=>console.log('cut the fruit'))  // cut the fruit after 2sec's 
})


.then(()=>{
    return order(1000,()=>console.log(`add ${stocks.liquids[0]} and ${stocks.liquids[1]}`))  // add water and ice after 1sec
})


.then(()=>{
    return order(1000,()=>console.log('start the machine'))  // start the machine after 1sec
})


.then(()=>{
    return order(2000,()=>console.log(`${stocks.holders[0]} has been selected`)) // select the container after 2 sec's 
})


.then(()=>{
    return order(3000,()=>console.log(`${stocks.toppings[0]} has been used for topping the icecream`)) // select the toppings after 3seconds
})


.then(()=>{
    return order(2000,()=>console.log('serve the icecream')) // serve the icecream after 2seconds
})

.catch(()=>{
    console.log('customer left')
})

.finally(()=>{
    console.log('day ends.shop is closed')   // finally is optional but it executes anyways resolved or rejected
})