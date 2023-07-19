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
const titolo = document.querySelector("p[class='domanda']");
const numberQuestion = document.querySelector(
  "span[class='numero-attuale-domanda']"
);
const allButtons = document.querySelectorAll("input[type='button']");
let correctAnswer = questions[indice].correct_answer; //SE LE definisco non si incrementano
let wrongAnswers = questions[indice].incorrect_answers;
let mixedAnswer = [];
let allAnswer = [];

/*Prima domanda al caricamento della pagina*/

window.addEventListener("load", changePage());

/*funzione che si attiva al click di un bottone e che attiva le altre*/
function changePage() {
  changeTitle();
  changeNad();
  changeAnswers();
  indice++;
  correctAnswer = questions[indice].correct_answer;
  wrongAnswers = questions[indice].incorrect_answers;
}
/*funzioni cambia titolo-domande-numeroDomanda*/
function changeTitle() {
  titolo.innerText = questions[indice].question;
}
function changeNad() {
  numberQuestion.innerText = indice + 1;
}
function changeAnswers() {
  joinAnswer();
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
/*funzione che aggiusta le risposte a scelta booleana*/
function controlNumberOfAnswer() {}
