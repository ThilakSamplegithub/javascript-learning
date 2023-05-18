const myVAR='value67'

function myApp(){
    const myvar='value59';
    const myFunc=function(){
        const myFunc2=()=>{
            const vare='value34';
            const myFunc3=()=>{
                console.log('my app is my app of myFunc3',vare)
            }
            console.log('my app is myFunc2',myvar)
            myFunc3()        // myFunc2 is lexical environment of myFunc3
        }
        myFunc2()                     //myFunc() is lexical environment of myFunc2()
        console.log(myvar)
    }
    myFunc()            //myApp is lexical environment of  myFunc() 
    console.log(myVAR);
}
myApp()          // global scope/global file is lexical environment of  myApp()