//random number function
let randomHull = function() {
    return Math.floor(Math.random() * 4) + 3

}

let randomFirepower = function() {
    return Math.floor(Math.random() * 3) + 2
}

let spaceshipAccuracy = function() {
    return Math.floor(Math.random() * 11) + 0

}
let alienAccuracy = function() {
    return Math.floor(Math.random() * 11) + 0
}





//no negative numbers

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
        if (alienAccuracy() <= 8)
            spaceShip.hull -= damage
        console.log(this.name + " has attacked " + spaceShip.name + " for " + damage + " damage.")
        console.log(spaceShip.name + " hull is at " + spaceShip.hull + " health.")
        //console.log(hash)
    }
}

//Objects

let spaceShip = {
    name: "The Milano",
    hull: 20,
    firepower: 5, //accuracy 70 percent
    attack: function(enemy) {
        if (spaceshipAccuracy() <= 7)
            enemy.hull -= spaceShip.firepower
        console.log(spaceShip.name + " has attacked " + enemy.name + " for " + spaceShip.firepower + " damage.")
        console.log("The " + enemy.name + " hull is at " + enemy.hull + " health.")

        //console.log(hash)

    }

}

let alien = new Aliens("Dark Aster")
let alien2 = new Aliens("Bird of Prey")
let alien3 = new Aliens("Water Tower")

//first ship battle
let ship1 = function() {
    while (alien.hull >= 0 && spaceShip.hull > 0) {
        spaceShip.attack(alien)
        if (alien.hull > 0 && spaceShip.hull > 0) {
            alien.attack()
        } else if (alien.hull <= 0) {

            console.log("Next Ship!")

            console.log(hash)



            break;
        }


    }
}

//second ship battle
let ship2 = function() {
    while (alien.hull <= 0 && alien2.hull >= 0 && spaceShip.hull > 0) {
        spaceShip.attack(alien2)
        if (alien2.hull > 0 && spaceShip.hull > 0) {
            alien2.attack()
        } else if (alien2.hull <= 0) {
            //$(".yes").show()
            console.log("Next ship!")
            console.log(hash)

            break;
        }


    }
}


let ship3 = function() {
    while (alien3.hull >= 0 && spaceShip.hull > 0) {
        spaceShip.attack(alien3)
        if (alien3.hull > 0 && spaceShip.hull > 0) {
            alien3.attack()
        } else if (alien3.hull <= 0) {
            console.log("Next ship!")
            break;
        }


    }
}

let refresh = function(){
    window.location.reload(true);
}


//ship1()
//continue yes or no
//if(alien.hull <= 0) 
//ship2()
//ship3()

let container = $('#container')
let $h1 = '<h1>Space Game</h1>'
let $round1 = '<h2><button onclick="ship1()">Start Game</button></h2>'
let $round2 =  '<h2><button onclick ="ship2()">ATTACK NEXT SHIP</button></h2>'
let $refresh = '<h2><button onclick ="refresh()">RETREAT</button></h2>'
let $round3 =  '<h2><button onclick ="ship3()">ATTACK NEXT SHIP</button></h2>'



container.append($h1)
container.append($round1).append($refresh).append($round2).append($refresh).append($round3)