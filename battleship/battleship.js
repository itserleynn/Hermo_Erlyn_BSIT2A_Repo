var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess
var hits = 0;
var guesses = 0;

var inSunk = false;

// Game logic

while(inSunk == fale){
    guess = prompt("Ready!. Aim!. Fire! (Enter number 0-6)");
    if (guess < 0 || guess > 6){
        alert("Please enter a validcell number!");
    }else {
        guesses = guesses + 1;
        if(guess == location || guess == location2 || guess == locaton1){
            hits = hits +1;
            alert("hits")
                if (hits == 3) {
                    inSunk = true;
                    alert("You sunk my battleship!")
                }
        } else{
            alert("Miss!")
        }
        
    }
    
}

var stats = "You sunk my battleship at; " + guesses + "guessses" + "and your accuracy is:" + (3/guesses);

alert(stats);