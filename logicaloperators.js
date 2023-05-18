// find the 2nd maximum
function secondmax(a,b,c){
    if(a>b && a>c){
        if((a-b)<(a-c)){
            console.log(b)
        }else{
            console.log(c)
        }
    }else if((b>a && b>c)){
        if((b-a)<(b-c)){
            console.log(a)
        }else{
            console.log(c)
        }
    }else if((c>a)&&(c>b)){
        if((c-a)<(c-b)){
            console.log(a)
        }else{
            console.log(b)
        }
    }
}
secondmax(41,65,221)
 // palindrome of a number 1221
 let co
 