// global variable
var score = 0;
const playerScore = document.getElementById("score");
const data = [
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
    question: "Who does Jim shoop hoops with?",
    options: ["Michael Jordan", "Julius Erving", "Magic"],
    answer: "Julius Erving",
  },
  {
    question: "What sport leads to the severe injury of DeAngelo Vickers?",
    options: ["Ice skating", "Golfing", "Basketball"],
    answer: "Basketball",
  },
  {
    question: "Charles Minor worked in what industry before paper?",
    options: ["steel", "gas", "rock"],
    answer: "steel",
  },
  {
    question: "Chair model distracts michael from what?",
    options: ["work", "work", "work"],
    answer: "work",
  },
  {
    question: "Kevin ruined Jim and Pam's honey moon by?",
    options: ["forgetting to take them to the airport", "locking their credit cards", "losing their luggage"],
    answer: "locking their credit cards",
  },
  {
    question: "Jim ruins the christmas party with a snowbal and?",
    options: ["razor scooter", "football helmet", "lacrosse stick"],
    answer: "lacrosse stick",
  },
  {
    question: "Phylis had a nickname in high school?",
    options: ["night owl", "easy rider", "burp queen"],
    answer: "easy rider",
  },
  {
    question: "Dwight Jr's actual name?",
    options: ["clark", "plop", "daniel"],
    answer: "clark",
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
    question: "Who eventually buys the office park?",
    options: ["Dwight", "Bob Vance", "Oscar"],
    answer: "Dwight",
  },
  {
    question: "Dwights sisters name?",
    options: ["doesnt have a sister", "mildred", "fannie"],
    answer: "fannie",
  },
  {
    question: "dwights cousins brothers name?",
    options: ["jeb", "alfred", "zeke"],
    answer: "zeke",
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

function updateOptions() {
  option1 = data[index].options[0];
  option2 = data[index].options[1];
  option3 = data[index].options[2];
}

// calculate score
// document.write('<p>Congradulations! You scored ' + score + ' points!</p>);

updateOptions();

function populateScreen(index) {
  const currentSelection = data[index];
  document.getElementById("question").textContent = currentSelection.question;
  document.getElementById("option1-btn").textContent =
    currentSelection.options[0];
  document.getElementById("option2-btn").textContent =
    currentSelection.options[1];
  document.getElementById("option3-btn").textContent =
    currentSelection.options[2];
}

populateScreen(0);

function returnQuestion() {
  const question = data[index].question;
  option1 = data[index].options[0];
  option2 = data[index].options[1];
  option3 = data[index].options[2];
  return question;
}

function incrementIndex() {
  if (index < data.length - 1) {
    index = index + 1;
  } else if (index === data.length - 1) {
    window.alert("You won?");
  }
}

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

  // function checkProgress(value, index) {
  //   if (value === 15) {
  //     document.getElementsByTagName("div");
  //   }
  // }
  // checkProgress();
  populateScreen(index);
  updateOptions();
}

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// Get the modal
// add an valuate answer function

function incrementIndex () {
  index = index + 1;
  // const returnedOption = returnOption();
  // document.getElementById("answer-btn1").textContent = returnedOption
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

document.getElementById("reset").addEventListener("click", () => {
  score = 0;
  playerScore.innerHTML = score;
  populateScreen(0);
});


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
