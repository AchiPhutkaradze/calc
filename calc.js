const buttons = document.querySelectorAll(".button");
const total = document.querySelector(".total");
const redButton = document.querySelector(".red");
const reset = document.querySelector(".reset");
let x = document.querySelector(".x");
const backspace = document.querySelector(".del");
const slider = document.getElementById("myrange");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const content = total.textContent;
    if (
      event.target.textContent === "x" ||
      event.target.textContent === "/" ||
      event.target.textContent === "+" ||
      event.target.textContent === "-" ||
      event.target.textContent === "."
    ) {
      if (
        content[content.length - 1] === "x" ||
        content[content.length - 1] === "/" ||
        content[content.length - 1] === "+" ||
        content[content.length - 1] === "-" ||
        content[content.length - 1] === "."
      ) {
        return;
      }
    }
    total.innerHTML += button.textContent;
  });
});
redButton.addEventListener("click", function () {
  let calc = eval(total.textContent.replaceAll("x", "*"));
  total.innerHTML = calc.toFixed(2);
});
//reset function
function myReset() {
  total.textContent = "";
}
reset.addEventListener("click", function () {
  myReset();
});

//del buttons function
function performBackspace() {
  const currentValue = total.textContent;

  if (currentValue.length > 0) {
    total.textContent = currentValue.substring(0, currentValue.length - 1);
  }
}

backspace.addEventListener("click", performBackspace);

//background colors
function colors() {
  if (slider.value == 2) {
    document.body.classList.remove("theme1");
    document.body.classList.remove("theme3");
    document.body.classList.add("theme2");
  }
  if (slider.value == 3) {
    document.body.classList.remove("theme1");
    document.body.classList.remove("theme2");
    document.body.classList.add("theme3");
  }
  if (slider.value == 1) {
    document.body.classList.remove("theme2");
    document.body.classList.remove("theme3");
    document.body.classList.add("theme1");
  }
}

slider.addEventListener("input", colors);
