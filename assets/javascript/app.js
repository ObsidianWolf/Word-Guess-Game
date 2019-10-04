//This will keep track of how many times the user has won
let wins = 0;
//This will keep track of how many times the user has lost
let losses = 0;
//This will be how many guesses the user gets
let guessesLeft = 10;
//This is an empty array in which our word will get pushed to
let currentWord = [];

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

scoreText = () => {
  document.getElementById("score").innerHTML =
    "Wins " + wins + "\n" + "Losses " + losses
};

guessText = () => {
    document.getElementById("guesses").innerHTML =
    "You have " + guessesLeft +" Guesses Left!!!"
};

guessText();
scoreText();