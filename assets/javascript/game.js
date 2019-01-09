console.log("sanity")



//start the game

//T0
//we need a random word list of all the computer options
var words = ["sentinel", "gauntlet", "queen", "criminal", "robotic", "immunity", "roast", "awesomeness", 
"beaten", "allowable", "setup", "feast"," groove", "healthy", "altercation", "loner", "mouth", "dress", "extravagant", 
"diabolatry","existent", "lovesick", "hideous", "jerk", "zombie", "hell", "blessing", "bald", "action", "gunk"];
//display wins and guesses left
var wins = 0;
var guessesLeft = (9);
var letters = []
var guessed = []
//create variables that hold references to the places in the HTML where we want to  display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentWord = document.getElementById("current-word");
var wrong = document.getElementById("wrong-letters");

//This function will run whenever the user presses a key.
document.onkeyup = function(event){

    //Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess, "userGuess")
        if (random.indexOf(userGuess)>= 0 ){
            //what are we doing here and why
            for (var i = 0; i < random.length; i++){
                //if right logic
                if (userGuess === random[i]){
                    letters[i] = userGuess
                } 
            } 
            currentWord.innerHTML = letters.join(" ");
            //check to see if won 
        } else {
            //logic if wrong
            guessesLeft --;

            //displays guesses left
            document.getElementById("guesses-left").innerHTML = "Guesses Remaining " + (guessesLeft)
            //just to see whats happening in the console 
            console.log(guessesLeft, "guesses-left");
        }

}
//Randomly chooses a choice from the options array. This i
var random = words[Math.floor(Math.random() * words.length)];
console.log(random, "random")

for (var i = 0; i < random.length; i++){ 
letters.push("_")
}
console.log(letters, "letters");
currentWord.innerHTML = letters.join(" ");
//if the letter is in the word 
    //if true 
        //replace the correct underscore with the letter
        //hint*
            //you may have to change multiple unscores with the first guess
        //did you win 
        //if user wins reset game and incrimit score by 1..
    //if false
        //subtract from guesses remaining by 1..
        //did you lose
        //if user loses game over, reset game increase losses.
        //keep track of the letters guessed.
// };



//here we define our array of words to choose from
//we will randomly choose one of these words
// var randomWord = ["sentinel", "gauntlet", "queen", "criminal", "robotic", "immunity", "roast", "awesomeness", 
// "beaten", "allowable", "setup", "feast"," groove", "healthy", "altercation", "loner", "mouth", "dress", "extravagant", 
// "diabolatry","existent", "lovesick", "hideous", "jerk", "zombie", "hell", "blessing", "bald", "action", "gunk"];


// //here we choose a random word from the array
// var randomWords = randomWord[Math.floor(Math.random() * words.length)].toUpperCase();

// //some globals
// var s;
// var count = 0;

// // the empty array to store the guesses
// var guessed = [];

// //here we fill the answer array with under scores
// //the number of underscores matches the letters in the randomly choosen word
// function startUp()
// {
//  for (var i = 0; i < randomWord.length; i++)
//  {
//     guessed[i] = "_";
//  }
 
//  //put them in a string
//  s = guessed.join(" ");
//  document.getElementById("answer") = s;
// }

// function Letter()
// {
// var letter = document.getElementById("letter").value;
// if (letter.length > 0)

// {
// for (var i = 0; i < randomWord.length; i++)
// {
//     if (randomWord[i] === letter)
//     {
//         guessed[i] = letter;
//     }
// }   
// }
// }



