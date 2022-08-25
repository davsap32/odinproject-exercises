const paragraph = document.getElementById("test");
const btnSubmit = document.querySelector(".submit_btn");
const textReturned = document.querySelector(".text_in");
const returnAnswer = document.querySelector(".answer");
paragraph.textContent += " This just got added";
const formatDate = function (date) {
  const day = `${date.getDate()}`.padStart(2, "0");
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const today = new Date();
  const dateStr = formatDate(today);
  returnAnswer.textContent = `Your answer: on ${dateStr}: ${textReturned.value.toUpperCase()}`;
});
