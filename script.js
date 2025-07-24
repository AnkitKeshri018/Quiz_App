document.addEventListener(`DOMContentLoaded`,()=>{

    let startbtn = document.getElementById("start-btn");
    let nextbtn= document.getElementById("next-btn");
    let restarttbtn= document.getElementById("restart-btn");
    let questionContainer= document.getElementById("question-container");
    let questionText= document.getElementById("question-text");
    let choicesList= document.getElementById("choices-list");
    let resultContainer= document.getElementById("result-container");
    let scoreDisplay= document.getElementById("score");
    


    const Questions = [
      {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript",
      },
      {
        question: "What does CSS stand for?",
        options: [
          "Central Style Sheets",
          "Cascading Style Sheets",
          "Cascading Simple Sheets",
          "Control Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "High Tech Markup Language",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        question: "What year was JavaScript launched?",
        options: ["1996", "1995", "1994", "None of the above"],
        answer: "1995",
      },
      {
        question: "Which company developed the React library?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
        answer: "Facebook",
      },
    ];
      
let currentQuestionIndex = 0 ;
let score = 0 ;

startbtn.addEventListener(`click`,startQuiz);

function startQuiz(){
   startbtn.classList.add("hidden");
   resultContainer.classList.add("hidden");
   questionContainer.classList.remove("hidden");
   showQuestion(); 
}

function showQuestion(){
    nextbtn.classList.add("hidden");
    questionText.textContent =Questions[currentQuestionIndex].question;
    choicesList.innerHTML ="";
    Questions[currentQuestionIndex].options.forEach((choice)=> {
      const li =  document.createElement("li");
      li.setAttribute("id",choice)
      li.textContent =choice;
      li.addEventListener("click",()=>selectanswer(choice));
      choicesList.appendChild(li);
    });
}

function selectanswer(choice){
   
    const correctanswer = Questions[currentQuestionIndex].answer;
    if(choice === correctanswer){
        score++;
    }
    nextbtn.classList.remove("hidden");
}

nextbtn.addEventListener("click",()=>{
    nextbtn.classList.add("hidden");
    currentQuestionIndex++;
    if(currentQuestionIndex< Questions.length){
    showQuestion();}
    else{
        showResult();
    }


})

 function showResult(){
resultContainer.classList.remove("hidden");
questionContainer.classList.add("hidden")
scoreDisplay.textContent =`${score} out of ${Questions.length}`
}

restarttbtn.addEventListener(`click`,()=>{
    currentQuestionIndex =0;
    score =0;
    startQuiz();
})



})