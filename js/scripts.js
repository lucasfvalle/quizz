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
    {
        "pergunta" : "Como inserimos um comentário em HTML?",
        "resposta": "c", 
        "a" : "/* Comentário */",
        "b" : "/ Comentário /",
        "c" : "<!-- Comentário -->",
    },
    {
        "pergunta" : "O código <meta charset='UTF-8'> fica dentro entre:",
        "resposta": "b", 
        "a" : "<body> </body>",
        "b" : "<head> </head>",
        "c" : "<footer> </footer>",
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
    {
        "pergunta" : "Qual o animal mais alto do mundo?",
        "resposta" : "a",
        "a": "Girafa",
        "b": "Lula colossal",
        "c": "Elefante africano",
    },
    {
        "pergunta" : "Qual é a média de vida de um cachorro?",
        "resposta" : "c",
        "a": "3-5 anos",
        "b": "14-20 anos",
        "c": "10-13 anos",
    },

]
var curious_question = [
    {
        "pergunta" : "Quem foi a primeira pessoa a viajar no Espaço?",
        "resposta" : "a",
        "a": "Yuri Gagarin",
        "b": "A cadela Laika",
        "c": "Buzz Aldrin",
    },
    {
        "pergunta" : "Qual a montanha mais alta do mundo?",
        "resposta" : "c",
        "a": "Mauna Kea",
        "b": "Monte Chimborazo",
        "c": "Monte Everest",
    },
    {
        "pergunta" : "Quem inventou a lâmpada?",
        "resposta" : "b",
        "a": "Graham Bell",
        "b": "Thomas Edison",
        "c": "Henry Ford",
    },
    {
        "pergunta" : "Onde se localiza Machu Picchu?",
        "resposta" : "a",
        "a": "Peru",
        "b": "Colômbia",
        "c": "China",
    },
    {
        "pergunta" : "Que país tem o formato de uma bota?",
        "resposta" : "b",
        "a": "Butão",
        "b": "Itália",
        "c": "México",
    },
]

// Telas
var initialScreen = document.getElementById('initial');
var questionScreen = document.getElementById('questions');
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
// Próxima pergunta
var nextQuestion = document.getElementById('next-button');
var questionIndex = 0;
// Estado inicial
initialScreen.style.display = "flex";
questionScreen.style.display = "none";
const changeScreen = () =>{
    initialScreen.style.display = "none";
    questionScreen.style.display = "flex";
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
    chosenTheme = curious_question;
    mainQuizz(chosenTheme, questionIndex);
})
nextQuestion.addEventListener("click", (score)=>{
    questionIndex++;
    if(questionIndex <= 4){
        mainQuizz(chosenTheme, questionIndex);
    }else{
        confirm("As perguntas acabaram!\nConfime para reiniciar o Quizz.");
        document.location.reload(true);
    }
})
