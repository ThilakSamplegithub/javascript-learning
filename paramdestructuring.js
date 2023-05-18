// lets us see paramdestructuring of object in two ways 1st way:
const person={
    name:'Thilak',
    gender:28
}
function obj(objectio){
    console.log(objectio.name);
    console.log(objectio['gender'])
}
obj(person)
// onather way of destructuring 
const maetrtjr={
    firstName:'harshit',
    gender:"male"
}
const focus=({firstName,gender})=>{
    console.log(firstName);
    console.log(gender)
    
}
focus(maetrtjr)
// now lets see paramdestructuring of array
const arr=[3,54,5]
function arra(want){
console.log(want[0]);
console.log(want[1])
}
arra(arr)