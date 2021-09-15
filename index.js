var readlineSync = require("readline-sync")
var chalk = require("chalk")

console.log(chalk.bgRgb(185,84,12)("--------The GAME OF THRONES QUIZ--------"))

var userName = readlineSync.question(chalk.blue("What's your name? "))

console.log(chalk.rgb(195, 141, 95)("Welcome Lord " + chalk.red(userName) + " to THE GAME OF THRONES!"))

var score = 0

var highScores = [
  {
    name: "Saad",
    score: 28
  },
  {
    name: "Noor",
    score: 20
  }
]

//data
var levelOne = [
  {
    question: "How did Joffrey die?",
    options: [
      "Struck by an errant crossbow shot",
      "Poisoned at his own wedding feast",
      "Thrown from the walls of the Red Keep",
      "Stabbed by a horde of small children",
    ],
    answer: 1
  },
  {
    question: "Which of the following was Sansa never married or engaged to?",
    options: [
      "Tyrion Lannister",
      "Joffrey Baratheon",
      "Ramsay Bolton",
      "Loras Tyrell",
    ],
    answer: 3
  },
  {
    question: "Which of the following is NOT one of Daenerys's dragons?",
    options: [
      "Aegon",
      "Rhaegal",
      "Viserion",
      "Drogon",
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT one of Daenerys's titles?",
    options: [
      "Khaleesi",
      "Mother of Dragons",
      "Breaker of Chains",
      "The Unsullied",
    ],
    answer: 3
  },
  {
    question: "Which of the following kingdoms is, on average, furthest south?",
    options: [
      "The Riverlands",
      "The Reach",
      "Dorne",
      "The Vale",
    ],
    answer: 2 
  },
  {
    question: "What is the sigil of house Baratheon?",
    options: [
      "Moon",
      "Unicorn",
      "Rose",
      "Stag",
    ],
    answer: 3
  },
  {
    question: "How are Jon and Daenerys related to each other?",
    options: [
      "They aren't",
      "Cousins",
      "Aunt / nephew",
      "Brother / sister",
    ],
    answer: 2
  },
  {
    question: "Who did Brienne of Tarth lose her virginity to?",
    options: [
      "Tormund Giantsbane",
      "Renly Baratheon",
      "Margaery Tyrell",
      "Jaime Lannister",
    ],
    answer: 3
  },
]

var levelTwo = [
  {
    question: "Where would you find the Citadel, the headquarters of the order of the maesters?",
    options: [
      "Braavos",
      "Oldtown",
      "Qarth",
      "Lannisport",
    ],
    answer: 1
  },
  {
    question: "Which character has all his reproductive organs intact?",
    options: [
      "Varys",
      "Grey Worm",
      "Theon Greyjoy",
      "Ser Bronn",
    ],
    answer: 3
  },
  {
    question: "Which of these characters never served as hand to a king (or queen)?",
    options: [
      "Tyrion Lannister",
      "Jorah Mormont",
      "Ser Davos Seaworth",
      "Ned Stark",
    ],
    answer: 1
  },
  {
    question: "Which of these characters was NOT killed by Arya?",
    options: [
      "The Night King",
      "Petyr Baelish",
      "Walder Frey",
      "Tywin Lannister",
    ],
    answer: 3
  },
  {
    question: "Who brought Jon Snow back from the dead?",
    options: [
      "Melisandre",
      "Jaqen H'ghar",
      "The Children of the Forest",
      "Brandon Stark",
    ],
    answer: 0
  },
  {
    question: "In what real-life city were many King's Landing scenes filmed?",
    options: [
      "Dubrovnik",
      "Edinburgh",
      "Rome",
      "Chicago",
    ],
    answer: 0
  },
  {
    question: "What is the seat of House Frey?",
    options: [
      "The Twins",
      "The Eyrie",
      "Harrenhal",
      "Pyke",
    ],
    answer: 0
  },
  {
    question: "Who was responsible for the creation of the Night King?",
    options: [
      "The Lord of Light",
      "The Children of the Forest",
      "The Drowned God",
      "The First Men",
    ],
    answer: 1
  },
  {
    question: "Who said: 'I don’t plan on knitting by the fire while men fight for me'?",
    options: [
      "Lyanna Mormont",
      "Sansa Stark",
      "Ser Brienne of Tarth",
      "Olenna Tyrell",
    ],
    answer: 0
  },
  {
    question: "What is the name of the giant dragon-slaying crossbow that failed to protect King’s Landing?",
    options: [
      "Millipede",
      "The 'You’re Making Me Very Cross(bow)'",
      "Scorpion",
      "Mantis",
    ],
    answer: 2
  },
  {
    question: "Where is the House of Black and White, the training temple of the Faceless Men?",
    options: [
      "Qarth",
      "Braavos",
      "Meereen",
      "No one knows",
    ],
    answer: 1
  },
  {
    question: "Which relative did Euron Greyjoy murder to take the Salt Throne of the Iron Islands?",
    options: [
      "His brother",
      "His uncle",
      "His nephew",
      "His cousin",
    ],
    answer: 0
  },
  {
    question: "What is the name of Arya’s sword?",
    options: [
      "Ice",
      "Pointy",
      "Fang",
      "Needle",
    ],
    answer: 3
  },
  {
    question: "In which King’s Landing slum did Gendry grow up?",
    options: [
      "Flea Bottom",
      "Rat Bottom",
      "Rhaenys’s Hill",
      "Dragonpit",
    ],
    answer: 0
  },
  {
    question: "Whose last words were: 'Give me something for the pain, and let me die'?",
    options: [
      "Stannis Baratheon",
      "Hodor",
      "Robert Baratheon",
      "Walder Frey",
    ],
    answer: 2
  },
  {
    question: "What is the go-to anaesthetic for maesters across Westeros called?",
    options: [
      "Shade of the evening",
      "Sourleaf",
      "Having another wine",
      "Milk of the poppy",
    ],
    answer: 3
  }
]

var levelThreePartOne = [
  {
    question: "Oberyn Martell skull was cracked like an egg by The Mountain's giant hands?",
    answer: true,
  },
  {
    question: "Robb Stark had molten gold poured over their head",
    answer: false,
  },
  {
    question: "Renly Baratheon was stabbed in the back by a smoke-baby-ghost",
    answer: true,
  },
  {
    question: "Ser Davos is colloquially known as The Onion Knight",
    answer: true,
  },
  {
    question: "Grey Worm is the leader of The Unjust",
    answer: false,
  }
]

var levelThreePartTwo = [
  {
    question: "What was the other name for King Aerys II Targaryen? ",
    answer: "Mad King"
  },
  {
    question: "How many kings and queens of Westeros did Lord Varys serve? ",
    answer: "4"
  },
  {
    question: "What's the name of the explosive that gave the Lannisters the edge in the Battle of Blackwater? ",
    answer: "Wildfire"
  },
  {
    question: "Who said: 'It's not easy being drunk all the time. Everyone would do it if it were easy? ",
    answer: "Tyrion Lannister"
  },
  {
    question: "Who said: 'Hush, Hodor! No more Hodoring!'? ",
    answer: "Bran Stark"
  }
]

//processing
function quiz(question, options, answer){
  var userAnswer = readlineSync.keyInSelect(options, chalk.red(question), {cancel: false})

  if(userAnswer === answer){
    console.log(chalk.yellow("---------------------"))
    console.log("You got it right!")
    score = score + 1;
  } else {
    console.log(chalk.yellow("---------------------"))    
    console.log("Oops! You got it wrong!")
  }
  console.log("Current score is: " + score)
  console.log(chalk.yellow("---------------------"))
}

function quizLevelThree(question, answer){
   var userAnswer = readlineSync.keyInYNStrict(question)
   
   if(userAnswer === answer){
    console.log(chalk.yellow("---------------------"))
    console.log("You got it right!")
    score = score + 1;
  } else {
    console.log(chalk.yellow("---------------------"))    
    console.log("Oops! You got it wrong!")
  }
  console.log("Current score is: " + score)
  console.log(chalk.yellow("---------------------"))
}

function quizLevelThreePartTwo(question, answer){
   var userAnswer = readlineSync.question(question)
   
   if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.yellow("---------------------"))
    console.log("You got it right!")
    score = score + 1;
  } else {
    console.log(chalk.yellow("---------------------"))   
    console.log("Oops! You got it wrong!")
  }
  console.log("Current score is: " + score)
  console.log(chalk.yellow("---------------------"))
}

console.log(chalk.bgCyan("--------Level One--------"))
console.log("Score 5 to pass Level One")
console.log(chalk.bgCyan("-------------------------"))
for(var i = 0; i < levelOne.length; i ++){
  quiz(levelOne[i].question, levelOne[i].options, levelOne[i].answer)
}

if(score < 5){
  console.log(chalk.bgRed("You need to score atleast 5 to go into Level Two"))
}

var scoreinLevelOne = score

if(score >= 5 && score <= 8){
  console.log(chalk.bgCyan("--------Level Two--------"))
  console.log("Score " + (score + 10) + " to finish Level Two")
  console.log(chalk.bgCyan("---------------------"))
 for(var i = 0; i < levelTwo.length; i ++){
  quiz(levelTwo[i].question, levelTwo[i].options, levelTwo[i].answer)
  }
var scoreinLevelTwo = score 
}

var resultScore = scoreinLevelTwo - scoreinLevelOne
if(resultScore > 5 && resultScore < 10){
  console.log("You need to score atleast 10 in Level One to go into Level Two")
}
if(resultScore >= 10 && resultScore <= 16){

  console.log(chalk.bgCyan("---You're now entering into Level Three---"))
  console.log(chalk.red("Level Three has two parts"))
  console.log(chalk.red("1. Five YES/NO based question"))
  console.log(chalk.red("2. Five answer the questions"))
  console.log(chalk.cyan("---Let's begin The Part One---"))
  for( var i = 0; i < levelThreePartOne.length; i++){
    quizLevelThree(levelThreePartOne[i].question, levelThreePartOne[i].answer)
  }

  console.log(chalk.cyan("---Finally! The Part Two---"))
  for( var i = 0; i < levelThreePartTwo.length; i++){
    quizLevelThreePartTwo(levelThreePartTwo[i].question, levelThreePartTwo[i].answer)
  }
}

//output
console.log("You've scored: " + score)
console.log("High Scores Board")
console.log(chalk.bgYellow("--- High scores Board ---"))

var defeatedNames = []
for(var i = 0; i < highScores.length; i++ ){
  var currentHighscorePerson = highScores[i]
  console.log(currentHighscorePerson.name + "   " + currentHighscorePerson.score)
  if (score > currentHighscorePerson.score){
    defeatedNames.push(" "+currentHighscorePerson.name)
  }
}

if(defeatedNames.length !== 0){
  console.log(chalk.green("Yay Congratulations!! You've defeated Lord " + defeatedNames + " and made a new high score"))
  console.log("Please send me a screenshot of this so that I can update the highscore. Thanks for playing!")
}

