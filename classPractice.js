class Ninja {
    constructor(name, health) {
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log('Name: ', this.name);
        console.log('Strength: ', this.strength);
        console.log('Speed: ', this.speed);
        console.log('Health:', this.health);
    }

    drinkSake(){
        this.health += 10
        console.log(this.health);
    }
}

const Jon = new Ninja('Jon', 100);

// Jon.drinkSake()
// Jon.showStats()
// Jon.sayName()

class Sensei extends Ninja{
    constructor(name) {
        super(name, 200, 10)
        this.wisdom = 10;

    }
    speakWisdom() {
        console.log("Comparison is the thief of joy.")
}
}

splinter = new Sensei("Master Splinter")

splinter.speakWisdom()

splinter.drinkSake()
splinter.drinkSake()
splinter.drinkSake()
splinter.drinkSake()
