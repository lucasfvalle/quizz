// Questões
var prog_question = [
    {
        "pergunta" : "Quem foi o criador do Javascript?",
        "resposta": "Brendan Eich", 
        "a" : "Brendan Eich",
        "b" : "Dennis Ritchie",
        "c" : "James Gosling",
    },
    {
        "pergunta" : "Quem foi o criador da Microsoft?",
        "resposta": "Bill Gates", 
        "a" : "Steve Jobs",
        "b" : "Linus Torvalds",
        "c" : "Bill Gates",
    },
    {
        "pergunta" : "Quem criou o Linux?",
        "resposta": "Linus Torvalds", 
        "a" : "Linus Torvald",
        "b" : "Steve Wozniak",
        "c" : "Alan Turing",
    },
]
var animal_question = [
    {
        "pergunta" : "Quantos meses dura a gestação da baleia?",
        "resposta" : "16 meses",
        "a": "9 meses",
        "b": "16 meses",
        "c": "36 meses",
    },
    {
        "pergunta" : "Qual o maior animal do mundo?",
        "resposta" : "Baleia azul antártica",
        "a": "Elefante africano",
        "b": "Girafa",
        "c": "Baleia azul antártica",
    },
    {
        "pergunta" : "Qual a maior raça de cachorro?",
        "resposta" : "Mastim Inglês",
        "a": "Mastim Inglês",
        "b": "Golden Retriever",
        "c": "Pastor alemão",
    },

]

// Elementos
let ThemePage = document.getElementById('initial');
let btnT1 = document.getElementById('t1');
let btnT2 = document.getElementById('t2');
let btnT3 = document.getElementById('t3');
let QuestionPage = document.getElementById('questions');
var randomIndex = Math.floor(Math.random() * 3);
var questionTitle = document.getElementById('question-title');
var questionAlterA = document.getElementById('a');
var questionAlterB = document.getElementById('b');
var questionAlterC = document.getElementById('c');
var theme;

QuestionPage.style.display = "none";


function changeScreen(){
    ThemePage.style.display = "none";
    QuestionPage.style.display = "flex";
}
function hasSelected(alterLetter){
    var selected_answer = document.getElementsByClassName('selected-answer');
    console.log("selecionadas: " + selected_answer.length);
    var reviewAlter = document.getElementById(alterLetter);

    if(selected_answer.length > 1){
        alert("mais de uma resposta selecionada!");
        reviewAlter.classList.remove('selected-answer');
    }
}
function selectedAnswer(){
    var alternativeA = document.getElementById('a');
    var alternativeB = document.getElementById('b');
    var alternativeC = document.getElementById('c');


    alternativeA.addEventListener("click", ()=>{
        if(alternativeA.classList.contains('answer-item')){
            console.log("Selecionou")
            alternativeA.classList.toggle('selected-answer');
        }else{
            console.log("Ocorreu algum erro.")
        }
       
       hasSelected('a');
       
    })
    alternativeB.addEventListener("click", ()=>{
        if(alternativeB.classList.contains('answer-item')){
            console.log("Selecionou")
            alternativeB.classList.toggle('selected-answer');
        }else{
            console.log("Ocorreu algum erro.")
        }
        hasSelected('b');
    })
    alternativeC.addEventListener("click", ()=>{
        if(alternativeC.classList.contains('answer-item')){
            console.log("Selecionou")
            alternativeC.classList.toggle('selected-answer');
        }else{
            console.log("Ocorreu algum erro.")
        }
        hasSelected('c');
    })
}
function displayQuestion(theme){
    switch(theme){
        case 'prog': theme = prog_question[randomIndex];
        break;
        case 'ani': theme = animal_question[randomIndex];
        break;
        default: console.log("Nada");
        break;
    }
    //theme = prog_question[randomIndex];
    console.log(theme);
    
    questionTitle.appendChild(document.createTextNode(theme.pergunta));
    questionAlterA.children[1].appendChild(document.createTextNode(theme.a));
    questionAlterB.children[1].appendChild(document.createTextNode(theme.b));
    questionAlterC.children[1].appendChild(document.createTextNode(theme.c));

    var opt = document.getElementsByClassName('selected-answer');
    console.log(opt[0]);
}
btnT1.addEventListener("click", ()=>{
    changeScreen();
    selectedAnswer();
    displayQuestion('ani');

       
})
btnT2.addEventListener("click", ()=>{
    changeScreen();
    selectedAnswer();
    displayQuestion('prog')

    
})
btnT3.addEventListener("click", ()=>{
    changeScreen();
    selectedAnswer();
    displayQuestion('prog')

})

console.log("Tema: " + theme)


//let randomnumb = Math.floor(Math.random() * 10);
