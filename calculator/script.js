    const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

clear.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

equals.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch {
    display.value = "Error";
  }
});
