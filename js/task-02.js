const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const listElement1 = document.createElement("li");
listElement1.textContent = ingredients[0];
const listElement2 = document.createElement("li");
listElement2.textContent = ingredients[1];
const listElement3 = document.createElement("li");
listElement3.textContent = ingredients[2];
const listElement4 = document.createElement("li");
listElement4.textContent = ingredients[3];
const listElement5 = document.createElement("li");
listElement5.textContent = ingredients[4];
const listElement6 = document.createElement("li");
listElement6.textContent = ingredients[5];
list.classList.add("item");
list.append(listElement1, listElement2, listElement3, listElement4, listElement5, listElement6 )
console.log(list);