// showing how nested for loop works
// father has 5 farms he asks his son to plant 25 seeds in each farm
/*for(let farm=1;farm<=5;farm++){
    for(let seeds=1;seeds<=25;seeds++){
        console.log('farm',farm,'seeds',seeds)
    }
}
// plant 5 seeds in 7farms
for(let farm=1;farm<=7;farm++){
    for(let seeds=1;seeds<=5;seeds++)
    console.log(farm,'-',seeds)
}*/
// if father says not to plant in vertical form but to plant in horizontal form
// plant 5 seeds in 5 farms
/*let bag=''                // here we placed empty bag appears only once bcoz its outside outer loop
for(let farm=1;farm<=5;farm++){
    
    for(let seeds=1;seeds<=5;seeds++){
       bag=bag+seeds
        
    }
    console.log(bag)
    
}
// plant 7 seeds in 10 farms horizontally
for(let farms=1;farms<=10;farms++){
    let bag=''           // here empty bag will appear 10 times as its is inside outerloop 
    for(let seeds=1;seeds<=7;seeds++){
       bag=bag+'*'
    }
    console.log(bag)
}
// plant 1seed in 1farm 2seeds in 2nd farm, 3seeds in 3rd farm till 5farms in horizontal form
for(let farms=1;farms<=5;farms++){
    let bag=''
    for(let seeds=farms;seeds<=farms;seeds++){
        bag=bag+seeds
    }
    console.log(bag)
}
// plant 5seeds in 1st farm, 2seeds in 4th farm, 3seeds in 3rd farm till 1seed in 5th farm horizontally
for(let farms=5;farms>=1;farms--){
    let bag=''
    for(let seeds=farms;seeds>=1;seeds--){
        bag=bag+seeds
    }
    console.log(bag)
}*/
// print prime numbers from 1 to limit

/*for(let num=1;num<=19;num++){
    let factor=0
    for(let j=1;j<=num;j++){
        if(num%j===0){
  factor++
        }
    }
    if(factor===2||factor===1){
        console.log(num)
    }
}*/
// now its different way of planting seeds 
/*for(let i=1;i<=5;i++){                         //on replit we can see output clearly unlike v.s
    let bag=''                               // not yet coded properly
    for(let j=1;j<=5;j++){
        if(i==2||i==3||i==4){
            if(j==2||j==3||j===4){
                bag=bag+' '
            }else{
                bag=bag+j+' '
            }
        }else if(i===1||i===5){
                bag=bag+j+' '
            }
            
        }
        console.log(bag)
            
          
            
        

    }*/
    // prints calender date-months
   /* for(let months=1;months<=12;months++){
        for(let days=1;days<=31;days++){
            console.log(days,"-",months)
            if(months==2){
                if(days==28){
                    break;
                }else{
                    console.log(days,'-',months)
                }
            }else if(months==4||months==6||months==9||months===11){
                if(days===30)
                break;
              }  

            }
        }*/
    // print 2 largest number or 2nd maximum in 3,4,7 stored in (a,b,c)
    // print is last digit in number is divisible by 3 or not 
// pattern question: Challenging one which trickled me
/*let N=4
let count=0
 for(let i=1;i<=N;i++){
       let bag=''
       for(let j=1;j<=N;j++){
           count++
           bag=bag+count+' '
       }
       console.log((bag))
   }*/
    // this is when N given on oj 
    let  N=5
for(let i=1;i<=N;i++){
  let bag=''
  for(let j=1;j<=N;j++){
    if(i==1||i==N){
      bag=bag+'*'
    }else if(i!==1||i!==N){
      if(j==1){
        bag=bag+'*'
        }else{
        bag=bag+' '
        }
    }
    }
   console.log(bag)   // see the result of pattern problems in replit link
  }
 

    

