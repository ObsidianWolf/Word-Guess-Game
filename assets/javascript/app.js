//what happens when the game loads
/*when the game loads the user is displayed instructions and a random word is 
chosen from our array of words*/
//how does the game start
/*The game is started when a user presses a letter key
the directions become hidden. */
//how does the game get played
/* you guess the letter that goes into the word and if the letter is in the word 
it would it would replace an under score until there are no blanks left */

//number of games won
let wins = 0;
//number of games lost
let losses = 0;
//number of user guesses
let userGuesses = 10;
//word array
const wordArray = [
  "option",
  "permanent",
  "direct",
  "voyage",
  "drug",
  "statement",
  "anger",
  "archive",
  "lie",
  "concern",
  "software",
  "count",
  "shot",
  "eat",
  "survivor",
  "fun",
  "highway",
  "short",
  "opponent",
  "smoke",
  "hate",
  "misplace",
  "authority",
  "export",
  "provide",
  "image",
  "automatic",
  "sickness",
  "fear",
  "affect",
  "discover",
  "separate",
  "limit",
  "art",
  "moving",
  "dream",
  "staff",
  "dominate",
  "scatter",
  "dark",
  "decay",
  "ignore",
  "quit",
  "interface",
  "color",
  "favour",
  "privilege",
  "morale",
  "barrier",
  "terrify",
  "fund",
  "squeeze",
  "detector",
  "spy",
  "year",
  "ceremony",
  "DemiDogs",
  "below",
  "fantasy",
  "rough",
  "pierce",
  "flat",
  "precision",
  "coffee",
  "cruel",
  "growling",
  "disorder",
  "extreme",
  "progress",
  "vein",
  "loan",
  "passage",
  "advertise",
  "cellar"
];
//global constant with the current word
const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
//this array holds our under scores
const underScores = [];
/*iterates through the number of letters in the word and replaces
them with an under score*/
for (let i = 0; i < randomWord.length; i++) {

  underScores.push("_");

}

//This is a global constant for our directions to by generated dynamically
const directionsText = document.getElementById("directions-text");


//starts game
document.onkeyup = function(event) {
  const userGuess = event.key;

  let lettersFound = false;
  
  for (let i = 0; i < randomWord.length; i++) {
    if(userGuess === randomWord[i]) {
      underScores[i] = userGuess;
      lettersFound = true;
    }
    
  }

  if(!lettersFound) {
    userGuesses--;
  }
  

  // directionsText.textContent = "";
  
  document.getElementById("word").innerHTML = underScores;
  
  const wordlength = randomWord.length;
  
  console.log(wordlength);
  
  scoreText = () => {
    document.getElementById("score").innerHTML =
    "Wins " + wins + "\n" + "Losses " + losses;
  };
  
  guessText = () => {
    document.getElementById("guesses").innerHTML =
    "You have " + userGuesses + " Guesses Left!!!";
  };
  
  guessText();
  scoreText();
};
