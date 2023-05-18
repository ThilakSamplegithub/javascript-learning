const users={
    firstName:'harsh',
    address:'pranipet',
    //place:  //{karimnagar:'mankammatjota'} 
}
console.log(users.firstName)
console.log(users.address)
//console.log(users.place.karimnagar)
//console.log(users.place)  // it shows undefined not error
//console.log(users.place.karimnagar) // already place is undefined and we r accessing undefined
// which is showings as error as undefind is not property
// but we want to turn even this as undefined as its useful in react
console.log(users?.firstName)
console.log(users.place)
console.log(users?.place?.karimnagar)
