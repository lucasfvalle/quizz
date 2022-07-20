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
var theme;

function changeScreen(){
    ThemePage.style.display = "none";
    QuestionPage.style.display = "flex"
}
QuestionPage.style.display = "none";
btnT1.addEventListener("click", ()=>{
    theme = 'Animal';
    console.log(theme);
    changeScreen();
})
btnT2.addEventListener("click", ()=>{
    theme = 'Informática';
    console.log(theme);

    questionTitle.appendChild(document.createTextNode(prog_question[randomIndex].pergunta))

    changeScreen();

})
btnT3.addEventListener("click", ()=>{
    theme = 'Cultura pop';
    console.log(theme);
    changeScreen();
})
console.log("Tema: " + theme)


//let randomnumb = Math.floor(Math.random() * 10);
