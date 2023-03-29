class Person {
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }
  sayHi() {
    console.log(
      `Hello, I'm ${this.firstName} ${this.lastName} and I'm ${this.age}`
    );
  }
}

class Character extends Person {
  constructor(firstName, lastName, age, attackDamage, healthPoints) {
    super(firstName, lastName, age);
    this.attackDamage = attackDamage;
    this.healthPoints = healthPoints;
    this.isAlive = true
  }
  attack(enemy) {
    enemy.logHealth();
    console.log(`${this.firstName} is attacking ${enemy.firstName} with ${this.attackDamage} hitpoints`)
    enemy.loseHealth(this.attackDamage)
  }
  logHealth() {
    this.sayHi();
    console.log("My health is " + this.healthPoints);
  }
  loseHealth(number){
    console.log("Loosing health by ", number)
    this.healthPoints -= number
    if(this.healthPoints <= 0){
        this.die()
    }
  }
  die(){
    console.log(`I, ${this.firstName}, died.`)
    this.isAlive = false
  }
}

var protagonist = new Character("Nelson", "foster", 66, 40, 100);
var antagonist = new Character("alex", "gonzalez", 22, 100, 130)

console.log("protagonist will now attack villain")

while(antagonist.isAlive){
    console.log("+++++++++++")
    protagonist.attack(antagonist)
}

