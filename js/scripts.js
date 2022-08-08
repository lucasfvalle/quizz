document.addEventListener("DOMContentLoaded", ()=>{


// Questões

var prog_question = [
    {
        "pergunta" : "Quem foi o criador do Javascript?",
        "resposta": "a", 
        "a" : "Brendan Eich",
        "b" : "Dennis Ritchie",
        "c" : "James Gosling",
    },
    {
        "pergunta" : "Quem foi o criador da Microsoft?",
        "resposta": "c", 
        "a" : "Steve Jobs",
        "b" : "Linus Torvalds",
        "c" : "Bill Gates",
    },
    {
        "pergunta" : "Quem criou o Linux?",
        "resposta": "a", 
        "a" : "Linus Torvald",
        "b" : "Steve Wozniak",
        "c" : "Alan Turing",
    },
]
var animal_question = [
    {
        "pergunta" : "Quantos meses dura a gestação da baleia?",
        "resposta" : "b",
        "a": "9 meses",
        "b": "16 meses",
        "c": "36 meses",
    },
    {
        "pergunta" : "Qual o maior animal do mundo?",
        "resposta" : "c",
        "a": "Elefante africano",
        "b": "Girafa",
        "c": "Baleia azul antártica",
    },
    {
        "pergunta" : "Qual a maior raça de cachorro?",
        "resposta" : "a",
        "a": "Mastim Inglês",
        "b": "Golden Retriever",
        "c": "Pastor alemão",
    },

]

// Telas
var initialScreen = document.getElementById('initial');
var questionScreen = document.getElementById('questions');

// Score
var playerScore = document.getElementById('player-score');

// Escolha dos temas
var themebt1 = document.getElementById('t1');
var themebt2 = document.getElementById('t2');
var themebt3 = document.getElementById('t3');
var chosenTheme;

// Elementos das perguntas
var questionTitle = document.getElementById('question-title');
let optA = document.getElementById('a');
var optB = document.getElementById('b');
var optC = document.getElementById('c');

// Score
var score = 0;
playerScore.children[1].textContent = score;





// Próxima pergunta
var nextQuestion = document.getElementById('next-button');
var questionIndex = 0;

// Estado inicial
initialScreen.style.display = "flex";
questionScreen.style.display = "none";
playerScore.style.display = "none";

const changeScreen = () =>{
    initialScreen.style.display = "none";
    questionScreen.style.display = "flex";
    playerScore.style.display = "block";
}
const cleanQuestion = ()=>{
    optA.ariaDisabled = false;
    optB.ariaDisabled = false;
    optC.ariaDisabled = false;
    questionTitle.textContent = "";
    optA.children[1].textContent = "";
    optB.children[1].textContent = "";
    optC.children[1].textContent = "";
    optA.classList.remove('selected-answer');
    optA.classList.remove('incorrect-answer');
    optB.classList.remove('selected-answer');
    optB.classList.remove('incorrect-answer');
    optC.classList.remove('selected-answer');
    optC.classList.remove('incorrect-answer');
}

const mainQuizz = (theme, questionIndex) =>{

    cleanQuestion();
    theme = theme[questionIndex];

    // Preenche a pergunta e alternativas
    questionTitle.textContent = theme.pergunta
    optA.children[1].textContent = theme.a;
    optB.children[1].textContent = theme.b;
    optC.children[1].textContent = theme.c;
    console.log("Question(C): " + optC.children[0].textContent.toLowerCase());

    // Eventos das alternativas
    optA.addEventListener("click", ()=>{
        optB.ariaDisabled = true;
        optC.ariaDisabled = true;
        if(optA.children[0].textContent.toLowerCase() == theme.resposta){
            optA.classList.add('selected-answer');
            optA.classList.remove('incorrect-answer');
        }else{
            optA.classList.add('incorrect-answer');c
        }
    })

    optB.addEventListener("click", ()=>{
        if(optB.children[0].textContent.toLowerCase() == theme.resposta){
            optA.ariaDisabled = true;
            optC.ariaDisabled = true;
            optB.classList.add('selected-answer');
            optB.classList.remove('incorrect-answer');
        }else{
            optB.classList.add('incorrect-answer');
        }
    })

    optC.addEventListener("click", ()=>{
        if(optC.children[0].textContent.toLowerCase() == theme.resposta){
            optA.ariaDisabled = true;
            optB.ariaDisabled = true;
            optC.classList.add('selected-answer');
            optC.classList.remove('incorrect-answer');
        }else{
            optC.classList.add('incorrect-answer');
        }
    })

}

themebt1.addEventListener("click", ()=>{
    changeScreen();   
    chosenTheme = prog_question; 
    mainQuizz(chosenTheme, questionIndex);
    
})
themebt2.addEventListener("click", ()=>{
    changeScreen();    
    chosenTheme = animal_question;
    mainQuizz(chosenTheme, questionIndex);
    
})
themebt3.addEventListener("click", ()=>{
    changeScreen();    
    mainQuizz(chosenTheme, questionIndex);
    
})

nextQuestion.addEventListener("click", ()=>{
    questionIndex++;
    if(questionIndex <= 2){
        var selectOpt = document.getElementsByClassName('selected-answer');
        console.log(playerScore.children[1].textContent);
        if(selectOpt){
            playerScore.children[1].textContent = score++;
        }
        mainQuizz(chosenTheme, questionIndex);
       
    }else{
        alert(`Acabou!\nSua pontuação foi: ${score} pontos\nClique em "OK" para reiniciar!`);
        document.location.reload(true);
    }
})
})
