const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

/*dichiarazione variabili principali*/
let CountRightAnswers = 0;
let indice = 0;
let primaPagina = true;
let mixedAnswer = [];
let allAnswer = [];
let isDouble = false;
let correctAnswer = questions[indice].correct_answer; //SE LE definisco non si incrementano
let wrongAnswers = questions[indice].incorrect_answers;
const titolo = document.querySelector("p[class='domanda']");
const numberQuestion = document.querySelector("span[class='num-att-domanda']");
const allButtons = document.querySelectorAll("input[type='button']");

/*Prima domanda al caricamento della pagina*/

window.addEventListener("load", changePage());

/*funzione che si attiva al click di un bottone e che attiva le altre*/
function changePage() {
  checkAnswer(); //controllo risposte
  indexIncrement(); //mi aumenta gli indici, agisce da ciclo for (dopo la prima pagina)
  joinAnswer(); //mi mette tutte le risposte di un singolo vettore in una domanda
  removeAddAnswer(); //mi controlla se le risposte sono due o quattro
  changeTitle(); //cambia il titolo
  changeNad(); //cambia il numero della domanda
  changeAnswers(); //cambia le domande
}
/*funzioni cambia titolo-domande-numeroDomanda*/
function changeTitle() {
  titolo.innerText = questions[indice].question;
}
function changeNad() {
  numberQuestion.innerText = indice + 1;
}
function changeAnswers() {
  mixedAnswer = mixArray(allAnswer);
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].value = mixedAnswer[i];
  }
}
/*funzione che mischia un array di lunghezza n */
function mixArray(array) {
  let solution = [];
  let indexes = [];
  let i = 0;
  while (i < array.length) {
    let randomNumber = Math.floor(Math.random() * array.length);
    if (!indexes.includes(randomNumber)) {
      solution.push(array[randomNumber]);
      indexes.push(randomNumber);
      i++;
    }
  }
  return solution;
}
/*funzione che mi mette tutte le risposte (giuste e sbagliate) in un vettore*/
function joinAnswer() {
  wrongAnswers.push(correctAnswer);
  allAnswer = wrongAnswers;
}

/*funzione che elimina due risposte nel caso la risposta fosse doppia*/
function removeAddAnswer() {
  if (allAnswer.length === 2) {
    allButtons[2].classList.add("invisible");
    allButtons[3].classList.add("invisible");
    isDouble = true;
  } else if (allAnswer.length !== 2 && isDouble === true) {
    allButtons[2].classList.remove("invisible");
    allButtons[3].classList.remove("invisible");
    isDouble = false;
  }
}

//mi aumenta gli indici DOPO la prima chiamata della funzione changePage
function indexIncrement() {
  if (primaPagina != true) {
    indice++;
    correctAnswer = questions[indice].correct_answer;
    wrongAnswers = questions[indice].incorrect_answers;
  } else {
    primaPagina = false;
  }
}
function guestAnswer() {}

function checkAnswer() {
  for (const button of allButtons) {
    if (button.clicked === "true") {
      if (button.value === correctAnswer) {
        CountRightAnswers++;
      }
    }
  }
}

//TIMER
/*
let timeLeft = 20;
let timer = document.getElementById("timeLeft");

function isTimeLeft() {
  return timeLeft > -1;
}

function runTimer(timerElement) {
  const timerCircle = timerElement.querySelector("svg > circle + circle");
  timerElement.classList.add("animatable");
  timerCircle.style.strokeDashoffset = 1;

  let countdownTimer = setInterval(function () {
    if (isTimeLeft()) {
      const timeRemaining = timeLeft--;
      const normalizedTime = (20 - timeRemaining) / 20;
      // for clockwise animation
      // const normalizedTime = (timeRemaining - 20) / 20;
      timerCircle.style.strokeDashoffset = normalizedTime;
      timer.innerHTML = timeRemaining;
    } else {
      clearInterval(countdownTimer);
      timerElement.classList.remove("animatable");
      changePage(); //quando il tempo uguale a 0 cambio pagina e resetto il timer e la funzione
      timeLeft = 20;
      runTimer(timerElement);
    }
  }, 1000);
}

runTimer(document.querySelector(".timer"));
*/
