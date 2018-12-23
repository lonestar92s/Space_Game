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
    attack: function(enemy) {
        enemy.hull -= spaceShip.firepower
        console.log(spaceShip.name + " has attacked " + enemy.name + " for " + spaceShip.firepower + " damage.")
        console.log("The " + enemy.name + " hull is at " + enemy.hull + " health.")

    }

}

let alien = new Aliens("Dark Aster")
let alien2 = new Aliens("Bird of Prey")

//ship function
let ship1 = function() {
    while (alien.hull >= 0 && spaceShip.hull > 0) {
        spaceShip.attack(alien)
        if (alien.hull > 0) {
            alien.attack()
        } else if (alien.hull <= 0) {
            console.log("Next ship!")
            break;
        }


    }
}


let ship2 = function() {
    while (alien2.hull >= 0 && spaceShip.hull > 0) {
        spaceShip.attack(alien2)
        if (alien2.hull > 0) {
            alien2.attack()
        } else if (alien2.hull <= 0) {
            console.log("Next ship!")
            break;
        }


    }
}


ship1()
ship2()

