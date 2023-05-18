function fun(n){
    if(n===0){return}
    console.log(n)
    fun(n-1)
    fun(n-1)
}
function main(){
    fun(4)
}
main()