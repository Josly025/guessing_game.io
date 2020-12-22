const input = document.getElementById("input");
const submit = document.getElementById("submit");
const alert = document.getElementById("alert");
let randomNumber = Math.floor(Math.random() * (20 - 1 + 1));

let min = 1;
let max = 20;

submit.addEventListener("click", checkGuess);

function checkGuess(e) {
  e.preventDefault();
  //make string into a value
  const guess = parseInt(input.value);
  if (isNaN(guess) | (guess > max) | (guess < min)) {
    alert.innerHTML = ` <div class="alert alert-dismissible alert-danger">
      <button type="button" class="close" data-dismiss="alert">
        &times;
      </button>
      <strong>Try again!</strong>
      <a href="#" class="alert-link">
        Please guess a number between ${min} and ${max}.
      </a>
    </div>`;
    setTimeout(function () {
      alert.remove();
    }, 4000);
  } else if (guess != randomNumber) {
    alert("incorrect answer");
  }
  console.log(guess);
}
