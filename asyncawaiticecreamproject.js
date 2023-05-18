const stocks={
    fruits:['strawberry','grapes','banana','apple'],
    liquids:['water','ice'],
    holders:['cone','cup','sticks'],
    toppings:['chocolate','peanuts']
}

// let me show how async function, when catch works.As we know finally works anyways
//async function order(){
  //  try{
    //    await abc()
   // }
    
//    catch(error){
  //      console.log("abc function doesn't exist",error)
    //}

  //  finally{
    //    console.log('runs code anyways')
  //  }
//}
//order()
// lets see how await works 
//const toppings_choice=()=>{
   // return new Promise((resolve,reject)=>{       // here now we will make new promise
  //      if(is_shop_open){
    //       setTimeout(()=>{
  //          resolve(console.log('which toppings do you love?'))
      //      },3000)                              
        //}else{
          //  reject(console.log('customer gaya'))
      //  }
        
   //     })
   // }    



 //async function kitchen(){
  //  console.log('a')
 //   console.log('b')
   // console.log('c')
   // await toppings_choice()
 //   console.log('d')
 //   console.log('e')
//}

//kitchen()
// to show till await function works which takes 3seconds meanwhile these will be printed
//console.log('do the dishes')
//console.log('clean the tables')
//console.log('clean the orders')

// here onwards icecream project starts 
// async is used to execute promise more efficiently
const is_shop_open=true;
function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }else{
            reject(console.log('shop is closed'))
        }
    })
}
async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.fruits[0]} is selected`)

        await time(2000)
        console.log('cut the fruit')

        await time(1000)
        console.log(`add ${stocks.liquids[0]} and ${stocks.liquids[1]}`)

        await time(1000)
        console.log('start the  machine')

        await time(2000)
        console.log(`${stocks.holders[0]} is used to top the icecream`)
         
        await time(3000)
        console.log(`${stocks.toppings[0]} is used as toppings`)

        await time(2000)
        console.log('serve the icecream')
    }

    catch(error){
        console.log('customer left',error)
    }

    finally{
        console.log('day ends.shop is closed')
    }
   
}
kitchen()
