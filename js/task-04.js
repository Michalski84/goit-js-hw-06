let counterValue = 0;
const displayCounter = document.querySelector("#value");
console.log(counterValue);

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const clickDecrement = () => {
    counterValue = counterValue - 1;
    displayCounter.textContent = counterValue;
};
buttonDecrement.addEventListener("click", clickDecrement);

const buttonIncrement = document.querySelector('button[data-action="increment"]');
const clickIncrement = () => {
    counterValue = counterValue + 1;
    displayCounter.textContent = counterValue;
};
buttonIncrement.addEventListener("click", clickIncrement);
