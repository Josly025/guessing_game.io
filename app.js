const input = document.getElementById("input");
const submit = document.getElementById("submit");
const alert = document.getElementById("alert");
const warning = document.getElementById("warning");
let correctAns = Math.floor(Math.random() * (10 - 1 + 1));

let min = 1;
let max = 10;

submit.addEventListener("click", checkGuess);

function checkGuess(e) {
  e.preventDefault();
  //make string into a value
  let guess = parseInt(input.value);
  if (isNaN(guess) | (guess > max) | (guess < min)) {
    alert.innerHTML = ` <div class="alert alert-dismissible alert-danger">
      <button type="button" class="close" data-dismiss="alert">
        
      </button>
      <strong>Try again!</strong>
      <a href="#" class="alert-link">
        Please guess a number between ${min} and ${max}.
      </a>
    </div>`;
    setTimeout(function () {
      alert.remove();
    }, 4000);
  } else if (guess === correctAns) {
    warning.innerHTML = `<div class="alert alert-dismissible alert-success">
      <button type="button" class="close" data-dismiss="alert">
        
      </button>
      <strong>Well done!</strong> You successfully guessed 
      <a href="#" class="alert-link">
        ${correctAns}
      </a>
    </div>`;
    setTimeout(function () {
      window.location.reload();
    }, 10000);
  } else {
    warning.innerHTML = `<div class="alert alert-dismissible alert-warning">
  <button type="button" class="close" data-dismiss="alert"></button>
  <h4 class="alert-heading">Incorrect Number!</h4>
  <p class="mb-0">Please Guess again.</a></p>
    </div>`;
  }
  console.log("this is correct answer " + correctAns);
  console.log(guess);
}
