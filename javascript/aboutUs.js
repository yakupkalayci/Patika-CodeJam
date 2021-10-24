let writeButton = document.querySelector(".write");
writeButton.onclick = function (e) {
  e.preventDefault();
  let questionArea = document.getElementById("question-area");
  let getQuestion = document.getElementById("question");
  let newQuestion = document.createElement("li");
  let symbol = document.createElement("i");
  symbol.classList.add("fa-question-circle");
  symbol.classList.add("fas");
  newQuestion.appendChild(symbol);
  let questionText = document.createTextNode(" " + getQuestion.value);
  newQuestion.appendChild(questionText);
  questionArea.appendChild(newQuestion);
  getQuestion.value = "";
};
