const paragraph = document.getElementById("test");
const btnSubmit = document.querySelector(".submit_btn");
const textReturned = document.querySelector(".text_in");
const returnAnswer = document.querySelector(".answer");
paragraph.textContent += " This just got added";

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  
  const dateStr = new Intl.DateTimeFormat('en-SE').format(new Date());
  returnAnswer.textContent = `Your answer: on ${dateStr}: ${textReturned.value.toUpperCase()}`;
});
const arr = [3,7,12,4,63,128,23,6, 15]
//console.log(arr.map(a => a * 2))
console.log(arr)
console.log(arr.sort((a,b)=> b-a))
//const biggest = arr.reduce((a,b) => a>b ? a:b)
console.log('biggest: ', arr.reduce((a,b) => a>b ? a:b))
