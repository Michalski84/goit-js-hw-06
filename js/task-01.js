const categoriesAll = document.querySelectorAll(".item");
const message = `Number of categories: ${categoriesAll.length}`
console.log(message);

const categoryName = document.querySelectorAll("h2");
const listElements = document.querySelectorAll("ul ul");
const message1 =
`Category: ${categoryName[0].textContent}
Elements: ${([...listElements][0].children.length)}

Category: ${categoryName[1].textContent}
Elements: ${([...listElements][1].children.length)}

Category: ${categoryName[2].textContent}
Elements: ${([...listElements][2].children.length)}`
console.log(message1);
