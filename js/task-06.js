const textInput = document.querySelector("#validation-input");
const inputLength = Number(textInput.getAttribute("data-length"));
console.log(inputLength);

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === inputLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});