// grid and find phrase saba
// I thought diagonal means only those i===j and i+j==n-1 but all diagonal in the matrix can start from anywhere
function twoArrayAndPhrase(n, m, matrix){
    //write code here
    let count=0
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(j<=m-4){   //horizontal
            if(matrix[i][j]==='s' && matrix[i][j+1]==='a' && matrix[i][j+2]==='b' && matrix[i][j+3]==='a'){
              count++  
            }
                
            }
            if(i<=n-4){   // vertical
                if(matrix[i][j]==='s' && matrix[i+1][j]==='a' && matrix[i+2][j]==='b' && matrix[i+3][j]==='a'){
                    count++
                }
            
            }
            if(i<=n-4 && j<=m-4 ){
                if(matrix[i][j]==='s' && matrix[i+1][j+1]==='a' && matrix[i+2][j+2]==='b' && matrix[i+3][j+3]==='a'){
                    count++
                }
            }
            if(i>=3 && j<=m-4){
                if(matrix[i][j]==='s' && matrix[i-1][j+1]==='a' && matrix[i-2][j+2]==='b' && matrix[i-3][j+3]==='a'){
                    count++
                }
            }
        }
    }
    console.log(count)
  
}