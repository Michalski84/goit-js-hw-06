const inputText = document.querySelector("#name-input");
console.log(inputText.placeholder);
const spanText = document.querySelector("#name-output");
console.log(spanText.textContent);

inputText.addEventListener("input", (event) => {
  if (!(inputText.value === "")){
  spanText.textContent = event.currentTarget.value;
  } else {
    spanText.textContent = "Anonymus";
  }
});