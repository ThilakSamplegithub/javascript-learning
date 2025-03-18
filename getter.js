class User{
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const[firstName,lastName]=fullName.trim().split(" ")
        this.firstName=firstName
        this.lastName=lastName
    }
}
const p1=new User("Harshith","vashisht")
console.log(p1.fullName)
p1.fullName='Mohit mahajan'
console.log(p1.fullName)
