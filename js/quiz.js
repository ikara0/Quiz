const quizData = [
  {
    question: "Türkiye'nin başkenti aşağıdakilerden hangisidir ?",
    a: "Ankara",
    b: "İstanbul",
    c: "Sivas",
    d: "İzmir",
    correct: "a",
  },
  {
    question: "Aşağıdakilerden hangisi HTML kısatlmasının açılımıdır ?",
    a: "Hightext Market Language",
    b: "Highlevel Making Language",
    c: "Hypertext Markup Language",
    d: "Highline Market Language",
    correct: "c",
  },
  {
    question: "Aşağıdakilerden hangisi CSS kısaltmasının açılımıdır ?",
    a: "Cascade Surrounding Style",
    b: "Casting Style Surface",
    c: "Cascading Style Sheets",
    d: "Canvas Sheets Style",
    correct: "c",
  },
];

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  const applouse = "Tebrikler!";
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (score == quizData.length) {
        quiz.innerHTML = `
                <h2>${applouse} ${score} soruyu doğru cevapladınız.</h2>
                <button onclick ="location.reload()">Yeniden Yükle</button>`;
      } else {
        quiz.innerHTML = `
                <h2>${score} soruyu doğru cevapladınız.</h2>
                <button onclick ="location.reload()">Tekrar Dene</button>`;
      }
    }
  }
});
