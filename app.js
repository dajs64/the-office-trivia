// clickable buttons for answers //
// Start page loads with an option for yes or no //
// Two players //
// Players switch with each question //
// 1 point assigned for the correct answer //
// First to 5 wins //
// 3 buttons w/ potential answers //
// Questions displayed in the middle of the screen //
// Correct button pressed point assigned to designated player //
// Next page with new question prompt and potential answers appears //
// Wrong button pressed next page with new question prompt and potential answers appears //
// Winner screen appears when a player reaches 5 points //
// 20 question cap //

// ** Start Button ** //
// create start button
// add clickable feature for start
// clickable but non functioning yes/no buttons
// upon start click link trivia page

// ** Trivia Page ** //
// create trivia page
// create a question area within the middle of the page
// cycle through questions and answers page by page
// DO NOT RANDOMIZE
// create buttons with potential answers
// write if else statements for each page focusing on each specific page (20 total questions) (20 total pages)
// LINK QUESTIONS TO ANSWERS
// create an array of 3 potential answers per page (60 total answers) (group 3 answers to each page)

// ** Point System ** //
// add container window with player 1 & player 2 & scores displayed
// assign points linked to if else statements (ie. if "true" 1 point/if "false 0 points")
// create a function to take you to the next question if a button is pressed (only buttons available = answers = 3)

// ** Winner Window ** //
// create a sigular button to pop up upon 5 correct answers
// pops up in the middle of the screen
// create a "play again" button that pops up 2 seconds (2000 ms) after winner window appears lnking the trivia page

// Phase 1
// click start button
// 1 question will present itself
// 3 answers will appear below
// choose right answer to get a point
// earn 5 points to win

// Phase 2
// start button
// console.log ("button clicked")
// build simple window with one button to click labeled "start"
// button linked to main game page
// main game page loads
// game begins instantly
// html window with start button
// simple styling focus on the JS
// once start is clicked game begins
// start button linked to game page

// question window middle of screen
// H2 element linked to JS to change questions upon correct answer
// new question/page loads no matter the answer
// correct answer awards point to player

// answers dispayed under question window defined as div 1,2,3 elements
// 3 potential answers to choose from
// correct answer chosen awards point to player (link points to player)
// incorrect answer chosen new question and set of answers populates

// player with 5 correct answers wins
// 20 questions total
// build array of questions
// wrong answers not displayed
// right answers displayed on page or in console

// ******** //  // ******** //  // ******** //  // ******** //  // ******** //
//start with an array of objects
// each index of the array first key value pair (question)
// next 3 key value pairs (answers)
// event listener on answers
// incriemtn to the next index in the array

// const questions = [question 1 what hand does michael shoot with,question 2 how much does Angela weigh]
// const Question 1 = {
//      Question
//      option1: "both",
//      option2: "right",
//      option3: "left",
// };

// const Question 2 = {
//      option1: "92lbs",
//      option2: "102lbs",
//      option3: "82lbs",
// };
// global variable

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
];

let index = 0;
let option1  = null
let option2 = null
let option3 = null

function updateOptions() {
  let option1 = data[index].options[0]
  let option2 = data[index].options[1]
  let option3 = data[index].options[2]
}

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
  if (index < data.length -1) {
    index = index + 1;
   } 
   //else if (index === data.length - 1) {
    //window.alert("You won?");
  //}
}

// function updateHtmlElements() {
//   const returnedQuestion = returnQuestion();
//     document.getElementById("question").innerText = returnedQuestion;
//     document.getElementById("option1-btn").innerText = option1;
//     document.getElementById("option2-btn").innerText = option2;
//     document.getElementById("option3-btn").innerText = option3;
// }

function handleClickAnswer(value,answer) {
    console.log(value, answer)
    if (value === answer) {
      console.log("true")
    }
    else {
      console.log("false")
    }
    incrementIndex()
    populateScreen(index)
    updateOptions()
}

function decrementIndex() {
  if (index > 0) {
    index = index - 1
  }
}



// add an valuate answer function 

// function incrementIndex () {
//   index = index + 1;
//   const returnedOption = returnOption();
//   document.getElementById("answer-btn1").textContent = returnedOption
// }

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
  .addEventListener("click", () => handleClickAnswer(option1, data[index].answer));

document
  .getElementById("option2-btn")
  .addEventListener("click", () => handleClickAnswer(option2, data[index].answer));

document
  .getElementById("option3-btn")
  .addEventListener("click", () => handleClickAnswer(option3, data[index].answer));
// access the info within the clappers with the event object // if whats clicked matches then move on 

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

// // NEXT STEP IF ELSE STATEMENTS SO THAT THE PAGE WONT GO PAST QUESTION # 3 AND WILL STOP AT QUESTION # 1 //
// // IF ELSE STATEMTNS WILL DO THIS LOOK THEM UP FRIDAY (TOMORROW) //
