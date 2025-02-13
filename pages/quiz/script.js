const questions = [
    {
        question: "Where did we first meet?",
        answers: [
            { text: "Cafe", correct: false },
            { text: "NSTP", correct: true },
            { text: "STI", correct: false },
            { text: "IJA", correct: false }
        ]
    },

    {
        question: "What's that one date that we've planned pero di matuloy?",
        answers: [
            { text: "National Museum", correct: false },
            { text: "Cubao Rooftop", correct: false},
            { text: "Calle Cafe", correct: true},
            { text: "Ramen", correct: false}
        ]
    }, 

    {
        question: "What's my favorite memory with you?",
        answers: [
            { text: "Paskuhan", correct: false},
            { text: "Agape", correct: false},
            { text: "Rooftop", correct: false},
            { text: "All of the above", correct: true}
        ]
    },

    {
        question: "How much do I love you?",
        answers: [
            { text: "80%", correct: false},
            { text: "90%", correct: false},
            { text: "100%", correct: false},
            { text: `&infin;`, correct: true}
        ]
    }

];

const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

let correct = false;


function StartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    ShowQuestion();

}

function ShowQuestion(){
    ResetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", SelectAnswer);
    })
}

function ResetState(){
    nextButton.style.display = "none";
    while(answersButton.firstChild){
        answersButton.removeChild(answersButton.firstChild)
    }
}

function SelectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        correct = true;
        score++;
    } else{
        correct = false;
        nextButton.innerHTML = "Restart"
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answersButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function ShowScore(){
    ResetState();
    questionElement.innerHTML = "For the final question..."
    setInterval(() => {
        location.href = "./will-you-be-my-valentine.html"
    }, 1500);
}

function HandleNextButton(){
  
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        ShowQuestion();
    } else{
        ShowScore();
    }
}

nextButton.addEventListener("click", ()=> {

    if(correct){
        if(currentQuestionIndex < questions.length){
            HandleNextButton();
        } else{
            StartQuiz();
        }
    } else{
        nextButton.value = "Restart";
        StartQuiz();
    }
    
})

StartQuiz();