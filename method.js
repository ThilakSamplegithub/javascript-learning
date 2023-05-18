const person={
    firstName:'Mohit',
    age:28,
    about: function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`)
    }
}
 console.log(person.firstName)
 console.log(person.about)   // total funtion displays
 person.about()    // resulted firstName is not defined
 // now lets use this key word
 function personInfo(){
console.log(`person name is ${this.firstName} and age is ${this.age}`)
 }
 const person1={
    firstName:'Mohit raina',
    age:28,
    about: personInfo
}
const person2={
    firstName:'raina',
    age:28,
    about: personInfo
}
const person3={
    firstName:'Thilak',
    age:28,
    about: personInfo
}
person1.about()
person2.about()
person3.about()
 console.log('********************')
 const user={
    name:'Thilak',
    
    age:28,
    hobbies:['wwe','playing zogai','listening music','do exercise'],
    details:function(){
        console.log(`my name is ${this.name}`)
        console.log(`my age is ${this.age}`)
        console.log('my hobbies are',this.hobbies.join(',ssss'))
        /*let bag=''
        for(let i=0;i<=this.hobbies.length-1;i++){
            bag=bag+this.hobbies[i]
           // console.log(`my hobbies are ${this.hobbies[i]}`)
          /* if(this.hobbies[i]===this.hobbies[this.hobbies.length-1]){
            bag=bag+this.hobbies[i]
           }else{
            bag=bag+this.hobbies[i]+','
           }*/
        }
        //console.log(`my hobbies are ${bag.join(' ')}`)
    }
 
 user.details()