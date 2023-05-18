
class Person {
    constructor(name,country){
      this.name = name;
      this.country=country
    }
  
    isFrom() {
      console.log(`${this.name} is from ${this.country}`)
    }
  }
  
  class Player extends Person{
    constructor(name,country, game) {
      super(name,country);
      this.game=game;
    }
  
    play() {
      console.log(`${this.name} is a ${this.game} player playing for ${this.country}`);
    }
  }
  
  let messi = new Player("messi","argentina","football")
    
  messi.isFrom()
// messi is from argintia is my Answer
//   0/1
//   error
//   messi is from argentina
   
//   messi is a football player playing for argentina
//   none of these
//   Other:
//   Correct answer
//   error
