const button = document.querySelector(".button");
const number = document.querySelector(".select-number");

function fibonacci() {
  let x = 1;
  let y = 0;
  let result = 0;
  for (let i = 0; i < number.value; i++) {
    result = x + y;
    x = y;
    y = result;
  }
  document.querySelector(".output").innerHTML = result;
  console.log(result);
}

button.addEventListener("click", fibonacci);
