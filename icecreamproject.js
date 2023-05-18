// Aim to do 7 steps:
// place order-->2seconds 
// cut the fruit-->2sec // this will be in production function 
// add water & ice-->1sec// this will also be in production
// start the machine-->1sec // this will be in process of production 
// select container-->2sec // it means holder which means it should be in production function 
// select toppings-->3sec // same
// serve ice-cream-->2sec// same
const stocks={
    fruits:['strawberry','grapes','banana','apples'],
    liquids:['water','ice'],
    holders:['cone','cup','stick'],
    toppings:['choclate','peanuts']
}
//order placed by customer so iam to create order function 
const order=(a,call_production)=>{  
    // i choose to give timegap of 2seconds to  place order 
   setTimeout(()=>{
    console.log('order placed please call production',`${stocks.fruits[a]} was selected`)
    call_production()
    },2000)
   
   
   // i will use call_production() inside setTimeout function other wise iam getting production function print 1st then order function after 2seconds
}
// placing production function
const production=()=>{
   setTimeout(()=>{
    console.log('start the production')
// 2nd step cut the fruit 
    setTimeout(()=>{
        console.log('choke the fruit')
        
        setTimeout(()=>{
            console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} r added`)

            setTimeout(()=>{
                console.log('machine has been started')
                
                setTimeout(()=>{
                    console.log(`${stocks.holders[0]} is selected`)

                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} are topped on ice cream`)

                        setTimeout(()=>{
                            console.log('serving the icecream')
                        },2000)
                    },3000)
                },2000)
            },1000)
        },1000)
    },2000)
    },0000)
  
   
}
order(0,production) // callback function
