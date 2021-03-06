var currentQuestion = 0
var questions = [
  "Commonly used data types DO NOT include",
  "The condition in an if/else statement is enclosed within _____.",
  "Arrays in Javascript can be used to store ____.",
  "String values must be enclosed within ____ when being assigned to variables",
  "A very useful tool used during development and debugging for printing content to the debugger is:"
];
var allChoices = [
  ["Strings", "Booleans", "Alerts", "Numbers"],
  ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
  ["numbers and strings", "other arrays", "booleans", "all of the above"],
  ["Commas", "curly brackets", "Quotes", "parentheses"],
  ["Javascript", "Terminal/Bash", "for loops", "console.log"]
];
const answers = [
  "Alerts",
  "Parentheses",
  "all of the above",
  "Quotes",
  "console.log"
];
var timeEl = document.querySelector(".time");;
var secondsLeft = 30;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Out of time!");
    }

  }, 1000);
}


    const startQuiz = document.getElementById("startQuiz");
const choicesList = document.getElementById("choicesList");
const questionSpan = document.getElementById("questionSpan");
// questionsDiv starts hidden
toggleDiv("questionsDiv")
// when user clicks the start button startDiv is questionsDiv is shown
startQuiz.addEventListener("click", function () {
  toggleDiv("startDiv");
  toggleDiv("questionsDiv");
  currentQuestion = 0;
  renderQuestion(currentQuestion);
  setTime();
});

function renderQuestion(index) {
  choicesList.innerHTML = "";
  questionSpan.textContent = questions[index];
  var choices = allChoices[index];


  for (var i = 0; i < choices.length; i++) {
    var choice = choices[i];

    var li = document.createElement("li");
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = choice;

    li.appendChild(button);
    choicesList.appendChild(li);

  }
}

function toggleDiv(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
choicesList.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("button") === true) {
    if (element.textContent === answers[currentQuestion]) {
      alert("correct!")
    } else {
      alert("incorrect")
    }
    if (currentQuestion + 1 < questions.length) {
      currentQuestion++
      renderQuestion(currentQuestion);
    } else {
      toggleDiv("startDiv");
      toggleDiv("questionsDiv")
    }
  }

});
