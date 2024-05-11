const $startGameButton = document.querySelector(".start-quiz");
const $nextQuestionButton = document.querySelector(".next-question");
const $questionsContainer = document.querySelector(".questions-container");
const $questionText = document.querySelector(".question");
const $answersContainer = document.querySelector(".answers-container");
const $answers = document.querySelectorAll(".answer");
const $background = document.querySelector(".background");
const $backgroundMusic = document.getElementById("background-music");

let currentQuestionIndex = 0;
let totalCorrect = 0;

$startGameButton.addEventListener("click", startGame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);

// Array de imagens correspondentes às perguntas
const questionBackgrounds = [
  "img/BMW/bmw-x1-2023-004-20230322102116-1280x925.jpg",
  "img/peugeot/peugeot-208.jpg",
  "img/volvo/VOLVO XC60 2022 01.jpg",
  "img/AlfaRomeo/ALFA ROMEO 4C ITALIA AND COMPETIZIONE EDITION 2018 01.jpg",
  "img/Ferrari/ferrari-sp51-2022-02-20220929153433-1280x925.jpg",
  "img/Ferrari/ferrari-testa-rossa-j-2021-02-20220210180503-1280x925.jpg",
  "img/ford/ford-mustang-gt-performance-2024-01-20240325174336-1600x1067.jpg",
  "img/volvo/VOLVO_COUPE_CONCEPT_2013_01.jpg",
  "img/peugeot/peugeot-rcz-2010-02-20240415120046-1600x1156.jpg",
  "img/Ferrari/ferrari-sf90-stradale-assetto-fiorano-2021-09-20220124112159-1600x1068.jpg",
  "img/peugeot/206bala.jpeg",
  "img/ford/ford-edge-china-version-2023-01-20220814171627-1920x1080.jpg",
  "img/ford/ford-puma-st-powershift-2023-01-20230308161108-1280x925.jpg",
  "img/Fotos pro Quiz/audi-a5-sportback-2024-01-20240510180058-1600x1067.jpg",
  "img/Fotos pro Quiz/audi-q2-2024-01-20240208141646-1920x1080.jpg",
  "img/Fotos pro Quiz/byd-seal-2023-022-20230416095746-1920x1080.jpg",
  "img/Fotos pro Quiz/CHRYSLER 300C 2011 03.jpg",
  "img/Fotos pro Quiz/FORD_FUSION_2010_02.jpg",
  "img/Fotos pro Quiz/HONDA_ACCORD_2013_007.jpg",
  "img/Fotos pro Quiz/LancerQuiz.jpg",
  "img/Fotos pro Quiz/mercedes-amg-e-53-hybrid-2025-003-20240312213633-1280x925.jpg"


];

// Embaralha o array de perguntas e de imagens correspondentes
function shuffleQuestions() {
  for (let i = questionBackgrounds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionBackgrounds[i], questionBackgrounds[j]] = [questionBackgrounds[j], questionBackgrounds[i]];
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

// Função para iniciar o jogo
function startGame() {
  $backgroundMusic.play();
  $startGameButton.classList.add("hide");
  $questionsContainer.classList.remove("hide");
  shuffleQuestions(); // Embaralha as perguntas e as imagens
  displayNextQuestion();
}

// Função para exibir a próxima pergunta
function displayNextQuestion() {
  resetState();

  if (currentQuestionIndex >= 10) { // Limita a 10 perguntas
    return finishGame();
  }

  // Escolhe a imagem de fundo correspondente à pergunta atual
  const currentBackground = questionBackgrounds[currentQuestionIndex];
  $background.style.backgroundImage = `url('${currentBackground}')`;

  $questionText.textContent = questions[currentQuestionIndex].question;
  questions[currentQuestionIndex].answers.forEach((answer) => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("button", "answer");
    newAnswer.textContent = answer.text;
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct;
    }
    $answersContainer.appendChild(newAnswer);

    newAnswer.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  while ($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild);
  }

  document.body.removeAttribute("class");
  $nextQuestionButton.classList.add("hide");
}

function selectAnswer(event) {
  const answerClicked = event.target;

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct");
    totalCorrect++;
  } else {
    document.body.classList.add("incorrect");
  }

  document.querySelectorAll(".answer").forEach((button) => {
    button.disabled = true;

    if (button.dataset.correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });

  $nextQuestionButton.classList.remove("hide");
  currentQuestionIndex++;
}

function finishGame() {
  const totalQuestions = 10; // Total de perguntas limitado a 10
  const performance = Math.floor((totalCorrect * 100) / totalQuestions);

  let message = "";

  switch (true) {
    case performance >= 80:
      message = "Você é um GEARHEAD :)";
      break;
    case performance >= 70:
      message = "Sabe MUITO :)";
      break;
    case performance >= 50:
      message = "Um pouco acima da média";
      break;
    default:
      message = "Pouco entendimento sobre carros :(";
  }

  $questionsContainer.innerHTML = `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
     
      <span>Resultado: ${message}</span>
    </p>
    <button onclick=window.location.reload() class="button">
      Refazer teste
    </button>
  `;
}

const questions = [
  {
    question: "Qual é o modelo deste carro?",
    answers: [
      { text: "BMW X6", correct: false },
      { text: "Volvo XC60", correct: false },
      { text: "BMW X1", correct: true },
      { text: "BMW 320i", correct: false }
    ]
  },
  {
    question: "De que marca é o carro?",
    answers: [
      { text: "Bmw", correct: false },
      { text: "Fiat", correct: false },
      { text: "Peugeot", correct: true },
      { text: "Volvo", correct: false }
    ]
  },
  {
    question: 'Qual é o modelo deste carro?',
    answers: [
      { text: 'Volvo XC60', correct: true },
      { text: 'Volvo s60', correct: false },
      { text: 'Volvo C40', correct: false },
      { text: 'Audi TT', correct: false }
    ]
  },
  {
    question: 'De que marca é o carro?',
    answers: [
      { text: "Ferrari", correct: false },
      { text: "AlfaRomeo", correct: true },
      { text: "Getafe", correct: false },
      { text: "Nissan", correct: false }
    ]
  },
  {
    question: 'Qual é o modelo desta FERRARI?',
    answers: [
      { text: 'SP51', correct: true },
      { text: 'Monza SP1', correct: false },
      { text: 'SF90 SPIDER', correct: false },
      { text: 'ROMA 296', correct: false }
    ]
  },
  {
    question: 'Qual a Marca do carro?',
    answers: [
      { text: 'Ferrari', correct: true },
      { text: 'Ford', correct: false },
      { text: 'Pagani', correct: false },
      { text: 'Chevrolet Esportivo', correct: false }
    ]
  },
  {
    question: 'Qual a Marca do carro?',
    answers: [
      { text: 'Horse', correct: false },
      { text: 'Nissan', correct: false },
      { text: 'Ford', correct: true },
      { text: 'Chevrolet', correct: false }
    ]
  },
  {
    question: 'Este carro é considerado o que?',
    answers: [
      { text: 'Hatch', correct: false },
      { text: 'SUV', correct: false },
      { text: 'Coupe', correct: true },
      { text: 'Sedan', correct: false }
    ]
  },
  {
    question: 'Esse Peugeot é um?',
    answers: [
      { text: 'RCZ', correct: true },
      { text: '206', correct: false },
      { text: '208', correct: false },
      { text: '308', correct: false }
    ]
  },
  {
    question: "Qual é o modelo deste carro?",
    answers: [
      { text: "Ferrari Estradale Assetto", correct: true },
      { text: "Ferrari LaFerrari", correct: false },
      { text: "Ferrari 458 Italia", correct: false },
      { text: "Ferrari F40", correct: false }
    ]
  },
  {
    question: "Qual é o modelo deste carro?",
    answers: [
      { text: "Peugeot 206", correct: true },
      { text: "Peugeot 308", correct: false },
      { text: "Peugeot 208", correct: false },
      { text: "Peugeot 3008", correct: false }
    ]
  },
  {
    question: "Qual é o modelo deste carro?",
    answers: [
      { text: "Ford Edge", correct: true },
      { text: "Ford Explorer", correct: false },
      { text: "Ford Escape", correct: false },
      { text: "Ford Expedition", correct: false }
    ]
  },
 
  {
    question: "Qual é o modelo deste carro?",
    answers: [
      { text: "Ford Puma", correct: true },
      { text: "Ford Fiesta Sedan", correct: false },
      { text: "Ford Fusion", correct: false },
      { text: "Ford Taurus", correct: false }
    ]
  },
  {
    question: "Qual é o modelo deste carro?",
    answers: [
      { text: "Audi A5", correct: true },
      { text: "Audi A3", correct: false },
      { text: "Audi A4", correct: false },
      { text: "Audi Q5", correct: false }
    ]
  },
  {
    question: "Qual é o modelo deste carro?",
    answers: [
      { text: "Audi Q2", correct: true },
      { text: "Audi A4", correct: false },
      { text: "Mercedez-Benz c180", correct: false },
      { text: "Audi Q7", correct: false }
    ]
  },
  {
    question: "Qual é o modelo deste carro?",
    answers: [
      { text: "BYD Seal", correct: true },
      { text: "BYD F3", correct: false },
      { text: "BYD Dolphin", correct: false },
      { text: "Tesla Model S", correct: false }
    ]
  },
  {
    question: "Qual é o modelo deste carro?",
    answers: [
      { text: "Chrysler 300C", correct: true },
      { text: "Chrysler 200", correct: false },
      { text: "Dodge Charger", correct: false },
      { text: "Jeep Grand Cherokee", correct: false }
    ]
  },
  {
    question: "Qual é o modelo deste carro?",
    answers: [
      { text: "Ford Fusion", correct: true },
      { text: "Ford Focus", correct: false },
      { text: "Ford Taurus", correct: false },
      { text: "Ford Mustang", correct: false }
    ]
  },
  {
    question: "Qual é o modelo deste carro?",
    answers: [
      { text: "Honda Accord", correct: true },
      { text: "Honda Civic", correct: false },
      { text: "Honda CR-V", correct: false },
      { text: "Honda Pilot", correct: false }
    ]
  },
  {
    question: "Qual é o modelo deste carro?",
    answers: [
      { text: "Mitsubishi Lancer", correct: true },
      { text: "Mitsubishi Mirage", correct: false },
      { text: "Mitsubishi Outlander", correct: false },
      { text: "Honda Civic Type-R", correct: false }
    ]
  },
  {
    question: "Qual é o modelo deste carro?",
    answers: [
      { text: "Mercedes-AMG GT", correct: true },
      { text: "Mercedes-Benz C-Class", correct: false },
      { text: "Mercedes-Benz E-Class", correct: false },
      { text: "Bmw 320i", correct: false }
    ]
  }
];
