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
    question: "How much does Michael weight?",
    options: ["82", "92", "102"],
    answer: "102",
  },
  {
    question: "How much does Devin weight?",
    options: ["92", "82", "102"],
    answer: "92",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
  },
  {
    question: "How much does Kevin weigh?",
    options: ["502", "202", "302"],
    answer: "302",
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
