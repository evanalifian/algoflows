import { startCounting } from "./functions.js";

const form = document.getElementById("n_input_form");
const nInput = document.getElementById("n_input_value");
const container = document.getElementById("show_answer");

form.addEventListener("submit", (even) => {
  container.innerHTML = null
  const nVal = nInput.value;
  startCounting(nVal, showAnswer)
  nInput.value = "";
  even.preventDefault();
});

export function showAnswer(answer) {
  const item = document.createElement("span")
  item.innerText = `=> ${answer}, `
  container.append(item)
}
