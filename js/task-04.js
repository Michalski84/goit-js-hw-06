let counterValue = 0;
const displayCounter = document.querySelector("#value");
console.log(counterValue);

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const clickDecrement = () => {
  return(counterValue = counterValue - 1),  console.log(counterValue);
};
buttonDecrement.addEventListener("click", clickDecrement);

const buttonIncrement = document.querySelector('button[data-action="increment"]');
const clickIncrement = () => {
  return(counterValue = counterValue + 1), console.log(counterValue);
};
buttonIncrement.addEventListener("click", clickIncrement);
displayCounter.textContent = counterValue;