
const btn = document.querySelector(".change-color");
const bgColor = document.querySelector("body");
const nameColor = document.querySelector(".color");

btn.addEventListener("click", (event) => {
  bgColor.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}