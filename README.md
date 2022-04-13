https://dajs64.github.io/the-office-trivia/
# office-trivia

![the office](https://user-images.githubusercontent.com/100155199/161991126-c41053f8-43c9-433c-be52-f372c2cd8bd5.jpeg)


## Project Description 

Browser based trivia game. Only one answer my be selected. Every question correctly answered will award the player 1 point. Questions are based off "The Office US" a popular television show running from 2005-2013.

## Planning Process

Simple html format with the focus directed on the questions and answers int he middle of the game board or screen. 
Track correct answers with JS to implement score increase and calling the next question array element. Be able to track winning by tallying up score. 15/20 points earns a win screen eventListener that displays in the middle of the screen. Reset button will take the page back to the beginning and reset score to play again!

You play to win!

Upon page load question will load with answers. 
When a correct answer is selected you will recieve 1 point per correct anser. 
Points will display top left corner of the screen. 
There are 20 questions total.
A win page will load when 15/20 questions are answered correctly.
A lose page will load when less than 15 questions are answered correctly 



## Wire frame



<img width="862" alt="Screen Shot 2022-04-10 at 5 25 01 PM" src="https://user-images.githubusercontent.com/100155199/162983682-0bc1785e-913e-4fe6-8061-32adef3d89c5.png">

## User Stories 
* as a user I want to be able to select a question. 
* as a user I want to be able to see score. 
* as a user I want to be able to select an answer option without any notion of right or wrong before selection.
* as a user I want to be able to reset the game and play again if I lose. 
* as a user I want to be able to know if I win. 

# MVP Goals
* as a user I want to be able to select a question. 
* as a user I want to be able to see score. 
* as a user I want to be able to select an answer option without any notion of right or wrong before selection.
* as a user I want to be able to reset the game and play again if I lose. 
* as a user I want to be able to know if I win. 

# Stretch Goals
* Next and Previous buttons 
* Player 1 vs Player 2
* Better "win" display 
* Better page layout 
* Pictures pop-up with quetions 

## MVP Wireframes 

# Layout
The layout and webpage are exactly the same as the game itself

* Buttons

Starting in the middle three answer options will appear with a question directly above

Answers: This button containes the possible answers for each question.
Reset: This button will take you back to the first question and reduce your score back to 0

* Windows 

Score window: top-right corner of the page will diplay score
Question window: located in the middle of the page will display the current question
Win: If you answer 15/20 questions correctly a "win" window will appear with a congradulatory phrase and rights to all bragging.

Hard part...
function resetGame() {
  score = 0;
  playerScore.innerHTML = score;
  index = 0;
  populateScreen(index);
}

I tried to loop this through a bunch of different elements and it just wouldn't work until it was broken down to bare bones. At one point I had like 15 lines in JS for this one reset button. 