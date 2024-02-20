//Aim to show function is also an object
//1st create constructor function i.e used to create object
function Circle(radius){
    this.radius=radius;
    this.about=function(){
        console.log('draw')
    }
}
const circle=new Circle(5)
console.log(circle) //we know it will result in object but every object has constructor function creates that object
console.log(Circle.constructor) //ƒ Function() { [native code] } here we can see clearly constructor function javascript
// engine used internally to create object is Function so I will prove it in next steps.

//Function constructor function taking 2 arguments and I stored in variable named Circle1.2 Arguments are required i.e
// one of them is parameter in string form and 2nd parameter is code in original function written in backtics as it's in 
// different lines.
const Circle1=new Function('radius',`this.radius=radius;
this.about=function(){
    console.log('draw') 
}`)
//Again  it's called assuming constructor function named stored variable Circle1
const circle2=new Circle1(1)
console.log(circle2)
const obj={
    name:'Thilak',
    isStatus:"Not married"
}

console.log(obj) // It also has constructor property
// Encapsulation
// group all variable and function as properties and methods in object
const Animal=function(name,breed){
 this.name=name;
 this.breed=breed;
 this.about=function(){
    console.log(`name`)
 }
}
const animal=new Animal('hachiko',"husky")
//inheritance : see protochaining and prototypal inheritance
//abstraction : hide details and complexity
// function Circular(){
//     this.name=name;
//     this.radius=radius;
//     this.defaultLocation=function(){

//     }
//     this.about=function(){

//     }
// }
// const arithmetic=new Circular('circle',30)
// console.log(arithmetic.) I could access defaultLocation so I want to hide it
// one way to do this is to make it local variable by declaring it using let or const
function Circular(){
    this.name=name;
    this.radius=radius;
    let defaultLocation=function(){

    }
    this.about=function(){
    defaultLocation()
    }
}
const arithmetic=new Circular('circle',30)
//look for polymorphism