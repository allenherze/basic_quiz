// Assigning Variables

const question = document.getElementById('question');
const optionA = document.getElementById('option-1');
const optionB = document.getElementById('option-2');
const alertMsg = document.getElementById('alert');
const readyBtn = document.getElementById('ready-btn');

// Fetching the questions

const getQuestions = async () => {
  const response = await fetch(`https://opentdb.com/api.php?amount=1`);
  let data = await response.json();
  displayQuestion(data);
  readyBtn.classList.add('d-none');
};

const displayQuestion = (data) => {
  question.innerHTML = data.results[0].question;
  displayOption(data);
};

const displayOption = (data) => {
  let answer = [data.results[0].correct_answer, data.results[0].incorrect_answers[0]];
  optionA.innerHTML = answer[0];
  optionB.innerHTML = answer[1];
  optionA.classList.add('d-inline-block');
  optionB.classList.add('d-inline-block');
};

const answerClick = (e) => {
  if (e.target.id === 'option-1') {
    getQuestions();
  } else {
    alertMsg.classList.add('d-block');
    setTimeout(() => {
      alertMsg.classList.remove('d-block');
    }, 3000);
  }
};

// Event listeners
// document.addEventListener('DOMContentLoaded');
readyBtn.addEventListener('click', getQuestions);
optionA.addEventListener('click', answerClick);
optionB.addEventListener('click', answerClick);
