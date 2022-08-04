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

// Elementos
let ThemePage = document.getElementById('initial');
let btnT1 = document.getElementById('t1');
let btnT2 = document.getElementById('t2');
let btnT3 = document.getElementById('t3');
let QuestionPage = document.getElementById('questions');
let playerScore = document.getElementById('player-score');
playerScore.style.display = "none";
QuestionPage.style.display = "none";

var randomIndex = Math.floor(Math.random() * 3);

var questionTitle = document.getElementById('question-title');
var questionList = document.getElementById('answer-list');
var questionAlterA = document.getElementById('a');
var questionAlterB = document.getElementById('b');
var questionAlterC = document.getElementById('c');
var theme;

const ChangeScreen = () =>{
        playerScore.style.display = "block"
        ThemePage.style.display = "none";
        QuestionPage.style.display = "flex";

}
const MakeQuestionPage = (theme) =>{
    
    var chosenTheme = theme[randomIndex];
    var question = document.getElementById('question-title');
    var optA = document.getElementById('a');
    var optB = document.getElementById('b');
    var optC = document.getElementById('c');

    console.log(question)
    
    // limpar
   
    
    question.appendChild(document.createTextNode(chosenTheme.pergunta));
    optA.children[1].appendChild(document.createTextNode(chosenTheme.a));
    optB.children[1].appendChild(document.createTextNode(chosenTheme.b));
    optC.children[1].appendChild(document.createTextNode(chosenTheme.c));
    

    const selected_answer = (chosenTheme, opt) =>{        
        if(opt ==  chosenTheme.resposta){
            alert("certo");
            //MakeQuestionPage(theme);
            return true
        }else{
            alert("Errado");
            return false
        }
    }
    const verifyOpt = (opt) =>{
        var optS = document.getElementsByClassName('selected-answer');
        console.log(optS);
        
        for(var i = 0; i < optS.length; i++){
            if(optS.length > 1){
                alert("Nao!");
                opt.classList.remove('selected-answer');
            }
        }
        console.log("RESPOSTA CERTA:" + chosenTheme.resposta);
        return chosenTheme.resposta;
    }
    var score = parseInt(playerScore.children[1].innerHTML)
    score = 0;
    playerScore.children[1].appendChild(document.createTextNode(score));
    

    optA.addEventListener("click", () =>{
        
        if(selected_answer(chosenTheme, 'a')){
            optA.classList.toggle('selected-answer');
            console.log("resposta" + chosenTheme.resposta);
        };
        if(optA.getAttribute('id') == verifyOpt(optA)){
            score++;
            playerScore.children[1].innerHTML = score;
            
//            playerScore.children[1].appendChild(document.createTextNode(score));
        }
        console.log(optA.getAttribute('id'))
        verifyOpt(optA);
    })
    optB.addEventListener("click", () =>{
       
        if(selected_answer(chosenTheme, 'b')){
            optB.classList.toggle('selected-answer');
            console.log("resposta" + chosenTheme.resposta);
        }else{
            optB.classList.toggle('incorrect-answer');
        }
        console.log(optB.getAttribute('id'))
        verifyOpt(optB);
    })
    optC.addEventListener("click", () =>{
        if(selected_answer(chosenTheme, 'c')){
            optC.classList.toggle('selected-answer');
        };
        console.log(optC.getAttribute('id'))
        verifyOpt(optC);
    })

}


btnT1.addEventListener("click", ()=>{
    var theme = this.animal_question;
    ChangeScreen();
    MakeQuestionPage(theme);
})
btnT2.addEventListener("click", ()=>{
    var theme = this.prog_question;
    ChangeScreen();
    MakeQuestionPage(theme);
})

btnT3.addEventListener("click", ()=>{
    var theme = this.animal_question;
    ChangeScreen();
    MakeQuestionPage(theme);
})



