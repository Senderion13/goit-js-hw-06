const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let items = [];

for (let index = 0; index < ingredients.length; index++) {
  items[index] = document.createElement("li");
  items[index].textContent = ingredients[index];
  items[index].style = "item";
}

document.querySelector("#ingredients").append(...items);