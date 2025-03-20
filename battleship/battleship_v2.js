var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess
var hits = 0;
var guesses = 0;

var inSunk = false;

// Game logic

while(inSunk == fale){
    guess = prompt("Ready!. Aim!. Fire! (Enter number 0-6)");

    if (guess == null) {
        alert('Thank you for playing!');
        break;
    }

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

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).tofixed(2)

var stats = "You took" + guesses + "guesses to sink the battleship!" + "\n" + "Accuracy:" + accuracy + "%";

alert(stats);