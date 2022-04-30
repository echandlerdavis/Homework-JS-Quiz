

const myQuestions = [
    {
        question: "This is the first question?",
        answers: [
            "answer a", 
            "answer b", 
            "answer c"
        ],
            
        correctAnswer: "answer b"
    },
    {
        question: "This is the second question?",
        answers: [
            "answer 1a", 
            "answer 1b", 
            "answer 1c"
        ],
        correctAnswer: "answer 1a"
    },
    {
        question: "This is the third question?",
        answers: [
            "answer 2a", 
            "answer 2b", 
            "answer 2c"
        ],
        correctAnswer: "answer 1c"
    }
];

var question = document.getElementById("questions")
var time = 30
var currentQuestionindex = 0

function startQuiz(){
    var startScreen = document.getElementById("start-screen")
    startScreen.setAttribute("class","hide")

    question.removeAttribute("class")

    timerId = setInterval(clockTick, 1000)

    getQuestion()
}

document.getElementById("start-button").onclick = startQuiz

function getQuestion() {
    var currentQuestion = myQuestions[currentQuestionindex];
    var titleEl = document.getElementById("question-title");

    titleEl.textContent = currentQuestion.question;
    var choicesEl = document.getElementById("choices")

    choicesEl.innerHTML = ""

    // maybe change id name
    currentQuestion.answers.forEach(function(answer, i){
        var answerButton = document.createElement("button");
        // set attributes for class/id for button style
        answerButton.textContent = answer;
        answerButton.setAttribute("class", "answer-buttons")

        answerButton.onclick = questionClick;

        choicesEl.appendChild(answerButton)
    }) 

}

function questionClick(e) {
    console.log(e)
   
    if(myQuestions[currentQuestionindex].correctAnswer === e.innerText){ 
        console.log("correct")
    //  Want text to say it's correct
    // Want the clock to stay the same
    //add to the userScore (userScore++)

     }else{
        //want the clock to decrese
        //time -10? 
        console.log(time)
    }

    currentQuestionindex++,
    getQuestion()

    // if statement whether it's wrong or not, taking time off the clock
}

// quiz ends, put in high score page
// input their initials
// localstorage.setItem() - save the initials
// save the time remaining on the clock as the value
// Make a clear button
// how to order scores correctly? - in local stoarge you can only save strings, but we want to save an object called high scores. J
// pull it down (JSON.stringify) and then set it to local storage. 


function clockTick() {
    time--;

    console.log(time);

    if (time <= 0){
        console.log("End Quiz");
        clearInterval(timerId);
    }
}




// need to make a function SendMessage for Game Over message
// var userScore = time 

//stringifiy to save it to local storage
//parse it to display it into the high score page
