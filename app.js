// global variable
var score = 0;
const playerScore = document.getElementById("score");
const data = [
// List of questions (key value pairs)  
  {
    question: "How much does Angela weight?",
    options: ["102", "82", "92"],
    answer: "82",
  },
  {
    question: "Name the cat Dwight gave Angela",
    options: ["pepper", "smokey", "garbage"],
    answer: "garbage",
  },
  {
    question: "Andy Bernards middle name?",
    options: ["David", "Baines", "Philip"],
    answer: "Baines",
  },
  {
    question: "Name of wife that leaves Kevin?",
    options: ["Stacy", "Angela", "Howey"],
    answer: "Stacy",
  },
  {
    question: "Michael's releators name?",
    options: ["Carol", "Martha", "Patty"],
    answer: "Carol",
  },
  {
    question: "What is the fun run raising money for?",
    options: ["babies", "rabies", "homeless"],
    answer: "rabies",
  },
  {
    question: "Who does Jim shoot hoops with?",
    options: ["Michael Jordan", "Julius Erving", "Magic"],
    answer: "Julius Erving",
  },
  {
    question: "What sport leads to the severe injury of Deangelo Vickers?",
    options: ["Ice skating", "Golfing", "Basketball"],
    answer: "Basketball",
  },
  {
    question: "Charles Miner worked at this company before Dunder Mifflin?",
    options: ["Saticoy Steel", "Exon Mobile", "Home Depot"],
    answer: "Saticoy Steel",
  },
  {
    question: "Chair model distracts michael from what?",
    options: ["work", "work", "work"],
    answer: "work",
  },
  {
    question: "Kevin ruined Jim and Pam's honeymoon by?",
    options: ["forgetting to take them to the airport", "locking their credit cards", "losing their luggage"],
    answer: "locking their credit cards",
  },
  {
    question: "Jim ruins the christmas party with a snowbal and?",
    options: ["razor scooter", "football helmet", "lacrosse stick"],
    answer: "lacrosse stick",
  },
  {
    question: "Phyllis had a nickname in high school?",
    options: ["night owl", "easy rider", "burp queen"],
    answer: "easy rider",
  },
  {
    question: "Dwight Jr's actual name?",
    options: ["Clark", "plop", "Daniel"],
    answer: "Clark",
  },
  {
    question: "Pams mural gets covered in?",
    options: ["math problems", "snake", "butts"],
    answer: "butts",
  },
  {
    question: "Creed is known by high school kids for?",
    options: ["fake ids", "drugs", "money"],
    answer: "fake ids",
  },
  {
    question: "Who eventually buys the office building?",
    options: ["Dwight", "Bob Vance", "Oscar"],
    answer: "Dwight",
  },
  {
    question: "Dwights sisters name?",
    options: ["doesn't have a sister", "Mildred", "fannie"],
    answer: "fannie",
  },
  {
    question: "What is Mose's brothers name?",
    options: ["Jeb", "Alfred", "Zeke"],
    answer: "Zeke",
  },
  {
    question: "If you don't know your rules you will be eaten in what?",
    options: ["a pile of garbage", "your sleep", "sweet and sour sauce"],
    answer: "your sleep",
  },
];

let index = 0;
let option1 = null;
let option2 = null;
let option3 = null;
// Populate options portion
function updateOptions() {
  option1 = data[index].options[0];
  option2 = data[index].options[1];
  option3 = data[index].options[2];
}

updateOptions();
// Give potential answer buttons functionality
function populateScreen() {
  const currentSelection = data[index];
  document.getElementById("question").textContent = currentSelection.question;
  document.getElementById("option1-btn").textContent =
    currentSelection.options[0];
  document.getElementById("option2-btn").textContent =
    currentSelection.options[1];
  document.getElementById("option3-btn").textContent =
    currentSelection.options[2];
}

populateScreen(index);
// Display the next question 
function returnQuestion() {
  const question = data[index].question;
  option1 = data[index].options[0];
  option2 = data[index].options[1];
  option3 = data[index].options[2];
  return question;
}
// Move on to the next question no matter the button pressed
function incrementIndex() {
  if (index < data.length - 1) {
    index = index + 1;
    } else {
    window.alert("You won?");
    }
}
// Increase score when the right answer is selected
// In console log reveal "false" when wrong answer selected
function handleClickAnswer(value, answer) {
  console.log(value, answer);
  if (value === answer) {
    score++;
    playerScore.innerHTML = score;
    console.log(score);
  } else {
    console.log("false");
  }
  incrementIndex();

  populateScreen(index);
  updateOptions();
}
// Reset game function
function resetGame() {
  score = 0;
  playerScore.innerHTML = score;
  index = 0;
  populateScreen(index);
}

// DONT USE TEXT CONTENT***
// we want to have one question at a time, so the first question can either display on page load or after hitting start
// object is a variable made of key value pairs those live inside {}
//   // add click listener to next/previous

document
  .getElementById("next")
  .addEventListener("click", () => incrementIndex());

document
  .getElementById("previous")
  .addEventListener("click", () => decrementIndex());

document
  .getElementById("option1-btn")
  .addEventListener("click", () =>
    handleClickAnswer(option1, data[index].answer)
  );

document
  .getElementById("option2-btn")
  .addEventListener("click", () =>
    handleClickAnswer(option2, data[index].answer)
  );

document
  .getElementById("option3-btn")
  .addEventListener("click", () =>
    handleClickAnswer(option3, data[index].answer)
  );

document.getElementById("reset").addEventListener("click", () => resetGame())

// Get the modal 
// var modal = document.getElementById("myModal")
// // Get the button that opens the modal 
// var playerScore. = score(15);


//   .getElementById('reset').onclick = function changeContent() {
//   document.getElementById('reset').textContent = "feed me";
//   document.getElementById('reset').style = "color: blue";
// }
//  .addEventListener("click") => onclick(reset)

// // self.setupUserInterfaceWithData = function() {
// //   // Add questions to buttons
// //   var ques = questions[gameQuestions[gameIndex]];
// //   var t = questionTitle[0].getElementsByTagName('span');
// //   t[0].innerHTML = ques;
// //   // Add answers to buttons
// //   var ans = answers[gameQuestions[gameIndex]];
// //   for (var i = 0; i < ans.length; i++) {
// //     var a = ans[i];
// //     buttonArray[i].textContent = a;
// //   }
// //  };

// // document.on = ("load", function () { })

// // constButton1 = document.getElementById(correctAnswers)
