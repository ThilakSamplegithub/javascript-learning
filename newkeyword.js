function myFunc(name,song,hobby){
    // this={}
    this.name=name
    this.song=song
    this.hobby=hobby
}
         const something= new myFunc('bobby','alchoholiya','seeing wwe')
         //console.log(something)
        //  here new keyword does 3things 1).replaces empty object with this so i can assume this={}
        // 2) here new keyword replaces with return this by default inspite of that i still can write return this
        // 3) here new key word also replaces Object.create method 
        myFunc.prototype.brand='Armani'
        console.log(something.brand)

        function createUser(firstName,lastName,email,age,address){
            this.firstName=firstName
            this.lastName=lastName
            this.email=email
            this.age=age
            this.address=address
          //return this
            // return user
        }
        const user1= new createUser('Thilak','singh','truimphThilak@gmail.com',29,'My Address')
        const user2= new createUser('Harshit','singh','truimphThilak@gmail.com',2,'My Address')
        const user3= new createUser('mohit','singh','truimphThilak@gmail.com',29,'My Address')
        createUser.prototype.about=function(){
            return `${this.firstName} is ${this.age} years old`
        }
        createUser.prototype.is18= function(){
            return  this.age>=18
        }
        createUser.prototype.sing=function(){
            console.log('sing a song a rapapooo')
        }
  console.log(user1.about())
  user1.sing()
  console.log(user1.is18())
  console.log(user2.about())
  console.log(user3.about())
  let arr=['4']
  let arr2=arr[0].trim().split(' ').map(Number)
  console.log(arr2)
  const arr1=new Array(1,2,3)
  console.log(arr1)
