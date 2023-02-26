const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

const newElements = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList = "item";
  itemEl.textContent = ingredient;
  return itemEl;
});

listIngredients.append(...newElements);
