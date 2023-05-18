function myApp(){
    const myVar='value59'
    function myFunc(){
        const myFunc2=function(){    // here myfunc2 is created inside myFunc() as soon as myFunc2 completed I can call myFunc2 inside myFunc,not outside myFunc
const vare='value21'
     console.log('this is myfunc2',vare)
        }
        myFunc2()
        console.log('inside myapp')
    }
    console.log('myapp is myapp')
    myFunc();                              // here I created myFunc() inside myApp() and if want to call myFunc()then i can inside only
    console.log('maetrtjr app')
    console.log(myVar)

}
myApp()

