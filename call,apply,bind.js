function perosonal(favfood,favactor){
    console.log(this.name,this.age,favactor,favfood)
    for(let i=0;i<this.hobbies.length;i++){
        console.log(`my hobbies are ${this.hobbies[i]}`)
    }
}

const user={
    name:'Thilak',
    age:28,
    hobbies:['seeing wwe','listening music','reading books','watching movies'],
    about:perosonal
}
const user1={
    name:'mohit',
    age:30,
    hobbies:['teaching','listening music','watching movies'],
   // about:perosonal
}
const user3={
    name:'nitin',
    age:32,
    hobbies:['listening stories','reading blogs','watching movies'],
   // about:perosonal
}
// user.about()
//user1.about()
//user3.about()
//user.about.call(user,'mutton','imitationgame')// till now we saw how call is used
//now we will see how apply will be used 
//user.about.apply(user3,['dum biryani','pawan kalyan']) // as we can observe apply replaces augments with array list &
// also call with apply key word
//user.about.apply(user1,['kacchabadam','jalebibai'])
//user.about.call(user,'mutton','imitationgame')
// user.about()
//user1.about()
//user3.about()
//const x=user.about.bind(user1,'junctionlo','khaja')
//x()
// now we will not create object method and we will call function DIRECTLY
/*const user4={
    name:'srinath',
    age:32,
    hobbies:['telling stories','playing with dogs','watching movies'],
   // about:perosonal
}
perosonal.call(user4,'raviteja','fish')*/

// Consider this code for answering
var bahubali = {
  name: "bahubali",
  age: 25,
  tellname:function() {    
  console.log("My name is", this.name);
}  
};
var pushparaj = {
  name: "pushparaj",
  age: 27
};
var peter={
  name:"peter",
  age:18
}

bahubali.tellname()

bahubali.tellname.call(peter)
let newThing=bahubali.tellname.bind(pushparaj)
console.log(newThing)
//console.log(bahubali.tellname.bind(pushparaj))

console.log(typeof bahubali.tellname.bind(pushparaj))
// console.log(typeof bahubali.tellname())
console.log(this)
function raju(){
    console.log(`my name is ${this.name} and mera kaam ${this.work}`)
}
let person1={
    name:"Raju",
    work:"Kaju"
}
let person2={
    name:"lambu",
    work:"madathaKaja"
}
raju.call(person1)
raju.call(person2)
let laugh={
    day:"friday",
    about:function(){
     console.log(`today is ${this.day}`)
    }
}
laugh.about.call(laugh)
let buddha={
    day:"Monday"
}
laugh.about.call(buddha)