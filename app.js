//random number function
let randomHull = function() {
    return Math.floor(Math.random() * 4) + 3

}

let randomFirepower = function() {
    return Math.floor(Math.random() * 3) + 2
}

//gui
let hash = "##################################################################################################"


//class

class Aliens {
    constructor(name) {
        this.name = name
        this.hull = randomHull()

    }
    attack(enemy) {
        let damage = randomFirepower()
        spaceShip.hull -= damage
        console.log(this.name + " has attacked " + spaceShip.name + " for " + damage + " damage.")
		console.log(spaceShip.name + " hull is at " + spaceShip.hull + " health.")
		console.log(hash)
    }
}

//Objects

let spaceShip = {
    name: "The Milano",
    hull: 20,
    firepower: 5, //accuracy 70 percent
    attack: function() {
        alien.hull -= spaceShip.firepower
        console.log(spaceShip.name + " has attacked " + alien.name + " for " + spaceShip.firepower + " damage.")
        console.log("The " + alien.name + " hull is at " + alien.hull + " health.")

    }

}

let alien = new Aliens("Dark Aster")
let alien2 = new Aliens("Bird of Prey")


let ship1 = function() {
    while (alien.hull >= 0 && spaceShip.hull > 0) {
        spaceShip.attack()
        if (alien.hull > 0) {
            alien.attack()
        } else if (alien.hull <= 0) {
            console.log("Next ship!")
            break;
        }


    }
}


ship1()