const quizDB = [
    {
        question: "Q1: How many colors are there in a rainbow?",
        a: "8",
        b: "5",
        c: "7",
        d: "6",
        ans: "ans3",
        img: "img1"
    },
    {
        question: "Q2: If you freeze water, what do you get",
        a: "Ice",
        b: "Icecream",
        c: "Water",
        d: "Icecandy",
        ans: "ans1",
        img: "img2"
    },
    {
        question: "Q3: Which is the tallest animal on the earth?",
        a: "Zebra",
        b: "Camel",
        c: "Elephant",
        d: "Giraffe",
        ans: "ans4",
        img: "img3"
    },
    {
        question: "Q3: How many days are there in a week?",
        a: "5",
        b: "7",
        c: "9",
        d: "6",
        ans: "ans2",
        img: "img4"
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const img = document.querySelector("img");

const answers = document.querySelectorAll('.answer');
let questionCount = 0;
let score = 0;

const showScore = document.querySelector('#showScore');

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    img.src = "Images/" + questionList.img + ".png";
}
loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false )
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score = score + 2;
    }
    else{
        score = score - 1;
    };
    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3>You Scored ${score}/${(quizDB.length) * 2}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;

        showScore.classList.remove('scoreArea');
    }
});




   
   