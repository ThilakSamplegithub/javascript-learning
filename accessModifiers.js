class Person{
    static specie="Human"//Its class attribute remains same for all instances
    constructor(name,gender){
        this.name=name//this is instance attribute
        this.gender=gender
    }
}
const p=new Person('saaj','male')
console.log(p.specie)
console.log(Person.specie)