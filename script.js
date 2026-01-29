

/* --- DATA (THE BANK) --- */
const questionBank = [
    { question: "What is the capital of France?", answers: [{text: "Berlin", correct: false}, {text: "Madrid", correct: false}, {text: "Paris", correct: true}, {text: "Lisbon", correct: false}] },
    { question: "Who wrote 'Hamlet'?", answers: [{text: "Charles Dickens", correct: false}, {text: "William Shakespeare", correct: true}, {text: "J.K. Rowling", correct: false}, {text: "Mark Twain", correct: false}] },
    { question: "What is the chemical symbol for Gold?", answers: [{text: "Au", correct: true}, {text: "Ag", correct: false}, {text: "Fe", correct: false}, {text: "Gd", correct: false}] },
    { question: "Which planet is known as the Red Planet?", answers: [{text: "Earth", correct: false}, {text: "Mars", correct: true}, {text: "Jupiter", correct: false}, {text: "Venus", correct: false}] },
    { question: "What is the largest ocean on Earth?", answers: [{text: "Atlantic", correct: false}, {text: "Indian", correct: false}, {text: "Arctic", correct: false}, {text: "Pacific", correct: true}] },
    { question: "How many bones are in the adult human body?", answers: [{text: "206", correct: true}, {text: "210", correct: false}, {text: "196", correct: false}, {text: "201", correct: false}] },
    { question: "Which animal is known as the 'Ship of the Desert'?", answers: [{text: "Horse", correct: false}, {text: "Elephant", correct: false}, {text: "Camel", correct: true}, {text: "Donkey", correct: false}] },
    { question: "Who painted the Mona Lisa?", answers: [{text: "Van Gogh", correct: false}, {text: "Picasso", correct: false}, {text: "Da Vinci", correct: true}, {text: "Michelangelo", correct: false}] },
    { question: "What is the hardest natural substance on Earth?", answers: [{text: "Gold", correct: false}, {text: "Iron", correct: false}, {text: "Diamond", correct: true}, {text: "Platinum", correct: false}] },
    { question: "Which country invented tea?", answers: [{text: "India", correct: false}, {text: "China", correct: true}, {text: "UK", correct: false}, {text: "Japan", correct: false}] },
    { question: "What is the square root of 64?", answers: [{text: "6", correct: false}, {text: "7", correct: false}, {text: "8", correct: true}, {text: "9", correct: false}] },
    { question: "Which is the smallest continent?", answers: [{text: "Asia", correct: false}, {text: "Australia", correct: true}, {text: "Europe", correct: false}, {text: "Africa", correct: false}] },
    { question: "What is the boiling point of water?", answers: [{text: "100°C", correct: true}, {text: "90°C", correct: false}, {text: "80°C", correct: false}, {text: "110°C", correct: false}] },
    { question: "Who discovered electricity?", answers: [{text: "Isaac Newton", correct: false}, {text: "Benjamin Franklin", correct: true}, {text: "Nikola Tesla", correct: false}, {text: "Einstein", correct: false}] },
    { question: "What is the fastest land animal?", answers: [{text: "Lion", correct: false}, {text: "Cheetah", correct: true}, {text: "Tiger", correct: false}, {text: "Leopard", correct: false}] },
    { question: "Which gas do plants absorb from the atmosphere?", answers: [{text: "Oxygen", correct: false}, {text: "Carbon Dioxide", correct: true}, {text: "Nitrogen", correct: false}, {text: "Hydrogen", correct: false}] },
    { question: "How many players are in a cricket team?", answers: [{text: "10", correct: false}, {text: "11", correct: true}, {text: "12", correct: false}, {text: "9", correct: false}] },
    { question: "What is the currency of Japan?", answers: [{text: "Yuan", correct: false}, {text: "Won", correct: false}, {text: "Yen", correct: true}, {text: "Dollar", correct: false}] },
    { question: "Which organ pumps blood in the human body?", answers: [{text: "Lungs", correct: false}, {text: "Brain", correct: false}, {text: "Heart", correct: true}, {text: "Liver", correct: false}] },
    { question: "Who was the first man to step on the Moon?", answers: [{text: "Yuri Gagarin", correct: false}, {text: "Neil Armstrong", correct: true}, {text: "Buzz Aldrin", correct: false}, {text: "Michael Collins", correct: false}] },
    { question: "What is the largest mammal?", answers: [{text: "Elephant", correct: false}, {text: "Blue Whale", correct: true}, {text: "Giraffe", correct: false}, {text: "Hippo", correct: false}] },
    { question: "How many colors are in a rainbow?", answers: [{text: "5", correct: false}, {text: "6", correct: false}, {text: "7", correct: true}, {text: "8", correct: false}] },
    { question: "Which element has the symbol 'O'?", answers: [{text: "Gold", correct: false}, {text: "Oxygen", correct: true}, {text: "Silver", correct: false}, {text: "Iron", correct: false}] },
    { question: "Which country is home to the Kangaroo?", answers: [{text: "India", correct: false}, {text: "Australia", correct: true}, {text: "USA", correct: false}, {text: "South Africa", correct: false}] },
    { question: "What is the capital of the USA?", answers: [{text: "New York", correct: false}, {text: "Washington D.C.", correct: true}, {text: "Los Angeles", correct: false}, {text: "Chicago", correct: false}] },
    { question: "How many sides does a hexagon have?", answers: [{text: "5", correct: false}, {text: "6", correct: true}, {text: "7", correct: false}, {text: "8", correct: false}] },
    { question: "Which is the longest river in the world?", answers: [{text: "Amazon", correct: false}, {text: "Nile", correct: true}, {text: "Yangtze", correct: false}, {text: "Mississippi", correct: false}] },
    { question: "Who created Mickey Mouse?", answers: [{text: "Walt Disney", correct: true}, {text: "Ub Iwerks", correct: false}, {text: "Stan Lee", correct: false}, {text: "Dr. Seuss", correct: false}] },
    { question: "What is the freezing point of water?", answers: [{text: "0°C", correct: true}, {text: "10°C", correct: false}, {text: "-10°C", correct: false}, {text: "100°C", correct: false}] },
    { question: "Which planet has rings?", answers: [{text: "Mars", correct: false}, {text: "Saturn", correct: true}, {text: "Venus", correct: false}, {text: "Mercury", correct: false}] },
    { question: "What is the main ingredient in Guacamole?", answers: [{text: "Tomato", correct: false}, {text: "Avocado", correct: true}, {text: "Onion", correct: false}, {text: "Pepper", correct: false}] },
    { question: "Which language is spoken in Brazil?", answers: [{text: "Spanish", correct: false}, {text: "Portuguese", correct: true}, {text: "French", correct: false}, {text: "English", correct: false}] },
    { question: "How many continents are there?", answers: [{text: "5", correct: false}, {text: "6", correct: false}, {text: "7", correct: true}, {text: "8", correct: false}] },
    { question: "What is the tallest mountain in the world?", answers: [{text: "K2", correct: false}, {text: "Everest", correct: true}, {text: "Kilimanjaro", correct: false}, {text: "Fuji", correct: false}] },
    { question: "Who is known as the Father of the Computer?", answers: [{text: "Alan Turing", correct: false}, {text: "Charles Babbage", correct: true}, {text: "Bill Gates", correct: false}, {text: "Steve Jobs", correct: false}] },
    { question: "Which bird cannot fly?", answers: [{text: "Eagle", correct: false}, {text: "Penguin", correct: true}, {text: "Parrot", correct: false}, {text: "Sparrow", correct: false}] },
    { question: "What does CPU stand for?", answers: [{text: "Central Process Unit", correct: false}, {text: "Central Processing Unit", correct: true}, {text: "Computer Personal Unit", correct: false}, {text: "Central Processor Unit", correct: false}] },
    { question: "Which is the largest country by area?", answers: [{text: "Canada", correct: false}, {text: "USA", correct: false}, {text: "China", correct: false}, {text: "Russia", correct: true}] },
    { question: "What is the national sport of Canada?", answers: [{text: "Soccer", correct: false}, {text: "Ice Hockey", correct: true}, {text: "Cricket", correct: false}, {text: "Tennis", correct: false}] },
    { question: "How many legs does a spider have?", answers: [{text: "6", correct: false}, {text: "8", correct: true}, {text: "10", correct: false}, {text: "12", correct: false}] },
    { question: "Which is the most spoken language in the world?", answers: [{text: "Spanish", correct: false}, {text: "English", correct: true}, {text: "Mandarin", correct: false}, {text: "Hindi", correct: false}] },
    { question: "Who wrote 'Harry Potter'?", answers: [{text: "J.R.R. Tolkien", correct: false}, {text: "J.K. Rowling", correct: true}, {text: "George R.R. Martin", correct: false}, {text: "Stephen King", correct: false}] },
    { question: "What is the speed of light?", answers: [{text: "300,000 km/s", correct: true}, {text: "150,000 km/s", correct: false}, {text: "1,000 km/s", correct: false}, {text: "3,000 km/s", correct: false}] },
    { question: "Which instrument measures temperature?", answers: [{text: "Barometer", correct: false}, {text: "Thermometer", correct: true}, {text: "Speedometer", correct: false}, {text: "Odometer", correct: false}] },
    { question: "What is the largest organ in the human body?", answers: [{text: "Liver", correct: false}, {text: "Skin", correct: true}, {text: "Heart", correct: false}, {text: "Lungs", correct: false}] },
    { question: "Which planet is closest to the Sun?", answers: [{text: "Venus", correct: false}, {text: "Mercury", correct: true}, {text: "Mars", correct: false}, {text: "Earth", correct: false}] },
    { question: "How many teeth does an adult human have?", answers: [{text: "30", correct: false}, {text: "32", correct: true}, {text: "28", correct: false}, {text: "34", correct: false}] },
    { question: "What is the capital of Italy?", answers: [{text: "Venice", correct: false}, {text: "Milan", correct: false}, {text: "Rome", correct: true}, {text: "Naples", correct: false}] },
    { question: "Who invented the telephone?", answers: [{text: "Alexander Graham Bell", correct: true}, {text: "Thomas Edison", correct: false}, {text: "Nikola Tesla", correct: false}, {text: "Guglielmo Marconi", correct: false}] },
    { question: "Which ocean is the Bermuda Triangle in?", answers: [{text: "Pacific", correct: false}, {text: "Indian", correct: false}, {text: "Atlantic", correct: true}, {text: "Arctic", correct: false}] },
    {question: "Which is the largest animal in the world?",answers: [{text: "Shark", correct: false},{text: "Blue Whale", correct: true},{text: "Elephant", correct: false},{text: "Giraffe", correct: false}]},
    {question: "Which is the smallest country in the world?",answers: [{text: "Vatican City", correct: true},{text: "Bhutan", correct: false},{text: "Nepal", correct: false},{text: "Sri Lanka", correct: false}]},
    {question: "Which is the largest desert in the world?",answers: [{text: "Kalahari", correct: false},{text: "Gobi", correct: false},{text: "Sahara", correct: false},{text: "Antarctica", correct: true}]},
    {question: "Which is the smallest continent in the world?",answers: [{text: "Asia", correct: false},{text: "Australia", correct: true},{text: "Arctic", correct: false},{text: "Africa", correct: false}]},
    {question: "Which movie idea was originated from the writer seeing his cat movements?",answers: [{text: "Fast and Furious", correct: false},{text: "The Lion King", correct: false},{text: "Toy Story", correct: false},{text: "How to Train you Dragon", correct: true}]}
];

/* --- ELEMENTS (SHARED) --- */
const galleryScreen = document.getElementById("gallery-screen");

/* --- ELEMENTS (QUIZ) --- */
const quizScreen = document.getElementById("quiz-screen");
const startQuizCard = document.getElementById("start-quiz-card");
const backHomeBtn = document.getElementById("back-home-btn");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let currentQuizQuestions = []; // Stores the 10 random questions for this round

/* --- QUIZ NAVIGATION --- */
if (startQuizCard) {
    startQuizCard.addEventListener("click", () => {
        galleryScreen.classList.add("hide");
        quizScreen.classList.remove("hide");
        startQuiz();
    });
}

backHomeBtn.addEventListener("click", () => {
    quizScreen.classList.add("hide");
    galleryScreen.classList.remove("hide");
});

/* --- QUIZ LOGIC --- */
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    
    // THE FIX: Randomize and Slice
    // 1. Shuffle the whole bank
    const shuffled = questionBank.sort(() => 0.5 - Math.random());
    // 2. Pick the first 10
    currentQuizQuestions = shuffled.slice(0, 5);
    
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = currentQuizQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${currentQuizQuestions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < currentQuizQuestions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < currentQuizQuestions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});


/* --- MEMORY GAME LOGIC --- */
// Memory Elements
const memoryScreen = document.getElementById("memory-screen");
const startMemoryCard = document.getElementById("start-memory-card");
const memoryBoard = document.getElementById("memory-board");
const movesCount = document.getElementById("moves-count");
const timeCount = document.getElementById("time-count");
const memoryRestartBtn = document.getElementById("memory-restart-btn");
const memoryBackBtn = document.getElementById("memory-back-btn");

// Memory Variables
let cards = [];
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let time = 0;
let timerInterval;
let matchesFound = 0;

// Memory Data (Icons)
const memoryItems = [
    { name: "pizza", icon: "🍕" },
    { name: "alien", icon: "👽" },
    { name: "rocket", icon: "🚀" },
    { name: "ghost", icon: "👻" },
    { name: "bomb", icon: "💣" },
    { name: "controller", icon: "🎮" },
    { name: "brain", icon: "🧠" },
    { name: "diamond", icon: "💎" },
];

// 1. Navigation Event Listeners
if (startMemoryCard) {
    startMemoryCard.addEventListener("click", () => {
        galleryScreen.classList.add("hide");
        memoryScreen.classList.remove("hide");
        initMemoryGame();
    });
}

if(memoryBackBtn) {
    memoryBackBtn.addEventListener("click", () => {
        stopTimer();
        memoryScreen.classList.add("hide");
        galleryScreen.classList.remove("hide");
    });
}

if(memoryRestartBtn){
    memoryRestartBtn.addEventListener("click", initMemoryGame);
}

// 2. Initialize Game
function initMemoryGame() {
    // Reset State
    moves = 0;
    time = 0;
    matchesFound = 0;
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    
    // Update UI
    movesCount.innerText = moves;
    timeCount.innerText = time;
    memoryBoard.innerHTML = "";
    stopTimer();
    startTimer();

    // Create Card Data (Double the items to make pairs)
    const cardData = [...memoryItems, ...memoryItems];
    
    // Shuffle
    cardData.sort(() => 0.5 - Math.random());

    // Generate HTML
    cardData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("memory-card");
        card.dataset.name = item.name;

        const front = document.createElement("div");
        front.classList.add("front-face");
        front.innerHTML = item.icon;

        const back = document.createElement("div");
        back.classList.add("back-face");
        // Removed the question mark content as per new CSS design
        back.innerHTML = ""; 

        card.appendChild(front);
        card.appendChild(back);
        
        card.addEventListener("click", flipCard);
        memoryBoard.appendChild(card);
    });
}

// 3. Flip Logic
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return; // Prevent double clicking same card

    this.classList.add("flip");

    if (!hasFlippedCard) {
        // First click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // Second click
    secondCard = this;
    incrementMoves();
    checkForMatch();
}

// 4. Match Logic
function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    // It's a match! Remove listeners
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    matchesFound++;
    
    resetBoard();
    
    // Win Condition
    if (matchesFound === memoryItems.length) {
        stopTimer();
        setTimeout(() => alert(`You won in ${moves} moves and ${time} seconds!`), 500);
    }
}

function unflipCards() {
    lockBoard = true; // Stop user from clicking others while these unflip
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1000); // 1 second delay
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// 5. Timer & Moves Helper
function incrementMoves() {
    moves++; 
    movesCount.innerText = moves;
}
function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        timeCount.innerText = time;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}