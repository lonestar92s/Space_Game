
//random number function
let randomHull = function(){
	return Math.floor(Math.random() * 4) + 3

}





//Objects

let spaceShip = {
	name: "The Milano",
	hull: 20,
	firepower: 5, //accuracy 70 percent
	attack: function(){
		aliens.hull -= spaceShip.firepower
		console.log(aliens.name + " hull is at " + aliens.hull)
	}

}



let aliens = {
	name: "Kree Ship's",
	hull: randomHull(),

}


while(aliens.hull > 0 && spaceShip.hull >0)
	spaceShip.attack()
