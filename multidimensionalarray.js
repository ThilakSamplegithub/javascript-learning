/*let ar=[['a','b','c'],
       ['d','e','f'],
       ['g','h','k']]
   let row=ar.length
    console.log(row) 
    let col=ar[0].length
    console.log(col)   
 //let col=3
 for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        console.log(ar[i][j])
    }
 }
 // if i want abc in 1line
 for(let i=0;i<row;i++){
    let bag=''
    for(let j=0;j<col;j++){
        bag=bag+ar[i][j]+' '
    }
    console.log(bag)
 }
 console.log('*******************')
// if i want gdahebkfc
for(let i=0;i<col;i++){
    let bag=''
    for(let j=row-1;j>=0;j--){
        //console.log(ar[j][i])
        bag=bag+ar[j][i]+' '
    }
    console.log(bag)
 }
 console.log('*******************')
 let arr=[[1,4,6],
         [65,56,4],
         [4,66,78]]
    let col1=arr[0].length
  let row1=arr.length
  let sum=0
  for(let i=0;i<row1;i++){
    for(let j=0;j<col1;j++){
        sum=sum+arr[i][j]
    }
  }
  console.log(sum)
  console.log('**********************')
  // print only odd numbers in row
  for(let i=0;i<row1;i++){
    let oddsum=0
    for(let j=0;j<col1;j++){
       if(arr[i][j]%2===1){
        oddsum=oddsum+arr[i][j]
       }
    }
    console.log(oddsum)
  }
  console.log('**************')
  // print only even sum
  for(let i=0;i<row1;i++){
    let evensum=0
    for(let j=0;j<col1;j++){
       if(arr[i][j]%2===0){
        evensum=evensum+arr[i][j]
       }
    }
    console.log(evensum)

  } 
  // column wise even
  for(let i=0;i<row1;i++){
    let evensum=0
    for(let j=0;j<col1;j++){
       if(arr[j][i]%2===0){
        evensum=evensum+arr[j][i]
       }
    }
    console.log(evensum)

  }   
  console.log('********************')
  // do left hand diagonal
  for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        if(i===j){
            console.log(arr[i][j])
        }
    }
  } 
  console.log("******************")
  // do right hand diagonal
  for(let i=0;i<col;i++){
    for(let j=0;j<row;j++){
        if(i+j==col-1){
            console.log(arr[i][j])
        }
         if(i===j){
              console.log(arr[i][j])
        }
    }
  }*/
/*let arr1=[[1,2,3],
         [4,5,6],
          [7,8,9],
         [10,11,12]]
         let col2=arr1[0].length
         let row2=arr1.length

  for(let i=0;i<row2;i++){
    for(let j=0;j<col2;j++){
        if(i%2===0){
            console.log(arr1[i][j])
        }else if(i%2==1){
           console.log(arr1[i][(col2-1)-j])
        }
    }
    }  */
    let arr1=[[1,2,3,4],
             [5,6,7,8],
            [9,10,11,12],
           [13,14,15,16]]
         let col2=arr1[0].length
         let row2=arr1.length

  /*for(let i=0;i<row2;i++){
    bag=''
    for(let j=0;j<col2;j++){
        if(i%2===0){
            bag=bag+arr1[i][j]+' '
        }else if(i%2==1){
           bag=bag+arr1[i][(col2-1)-j]+' '
        }
       // console.log(bag)
    }
    console.log(bag)
    } */
    for(let i=0;i<row2;i++){
        if(i%2==0){
            for(let j=0;j<col2;j++){
                console.log(arr1[i][j])
            }
        }else if(i%2==1){
           for(let j=col2-1;j>=0;j--){
            console.log(arr1[i][j])
           }
        }
        
        }
    