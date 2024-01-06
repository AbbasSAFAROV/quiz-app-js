const questions = [
    {
        question : "A flashing red traffic light signifies that a driver should do what?",
        answers : [
            { text: "stop", correct: true },
            { text: "speed up", correct: false },
            { text: "proceed with caution", correct: false },
            { text: "honk the horn", correct: false },
        ]
    },
    {
        question : "A knish is traditionally stuffed with what filling?",
        answers : [
            { text: "potato", correct: true },
            { text: "creamed corn", correct: false },
            { text: "lemon custard", correct: false },
            { text: "raspberry jelly", correct: false },
        ]
    },
    {
        question : "A flashing red traffic light signifies that a driver should do what?",
        answers : [
            { text: "stop", correct: true },
            { text: "speed up", correct: false },
            { text: "proceed with caution", correct: false },
            { text: "honk the horn", correct: false },
        ]
    },
    {
        question : "A flashing red traffic light signifies that a driver should do what?",
        answers : [
            { text: "stop", correct: true },
            { text: "speed up", correct: false },
            { text: "proceed with caution", correct: false },
            { text: "honk the horn", correct: false },
        ]
    },
    {
        question : "A flashing red traffic light signifies that a driver should do what?",
        answers : [
            { text: "stop", correct: true },
            { text: "speed up", correct: false },
            { text: "proceed with caution", correct: false },
            { text: "honk the horn", correct: false },
        ]
    },

    {
        question : "A flashing red traffic light signifies that a driver should do what?",
        answers : [
            { text: "stop", correct: true },
            { text: "speed up", correct: false },
            { text: "proceed with caution", correct: false },
            { text: "honk the horn", correct: false },
        ]
    },

    {
        question : "A flashing red traffic light signifies that a driver should do what?",
        answers : [
            { text: "stop", correct: true },
            { text: "speed up", correct: false },
            { text: "proceed with caution", correct: false },
            { text: "honk the horn", correct: false },
        ]
    },

    {
        question : "A flashing red traffic light signifies that a driver should do what?",
        answers : [
            { text: "stop", correct: true },
            { text: "speed up", correct: false },
            { text: "proceed with caution", correct: false },
            { text: "honk the horn", correct: false },
        ]
    },

    {
        question : "A flashing red traffic light signifies that a driver should do what?",
        answers : [
            { text: "stop", correct: true },
            { text: "speed up", correct: false },
            { text: "proceed with caution", correct: false },
            { text: "honk the horn", correct: false },
        ]
    },

    {
        question : "A flashing red traffic light signifies that a driver should do what?",
        answers : [
            { text: "stop", correct: true },
            { text: "speed up", correct: false },
            { text: "proceed with caution", correct: false },
            { text: "honk the horn", correct: false },
        ]
    },

    {
        question : "A flashing red traffic light signifies that a driver should do what?",
        answers : [
            { text: "stop", correct: true },
            { text: "speed up", correct: false },
            { text: "proceed with caution", correct: false },
            { text: "honk the horn", correct: false },
        ]
    },

];

const questionElemant = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =  currentQuestionIndex + 1;
    questionElemant.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(x => {
        const button = document.createElement("button");
        button.innerHTML = x.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (x.correct) {
            button.dataset.correct = x.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display =  "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showScore() {
    resetState();
    questionElemant.innerHTML = `Your scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';

    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } 
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

startQuiz();