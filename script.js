const paragraph = document.getElementById("test");
const btnSubmit = document.querySelector(".submit_btn");
const textReturned = document.querySelector(".text_in");
const returnAnswer = document.querySelector(".answer");
paragraph.textContent += " This just got added";

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  returnAnswer.textContent = "Your answer: " + textReturned.value.toUpperCase();
});
