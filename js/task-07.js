const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = fontSize.value;

fontSize.addEventListener("input", (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
} );

console.log(text.textContent);