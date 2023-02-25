const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const itemEl1 = document.createElement('li');
itemEl1.textContent = 'Potatoes';
itemEl1.classList.add('item');

const itemEl2 = document.createElement('li');
itemEl2.textContent = 'Mushrooms';
itemEl2.classList.add('item');

const itemEl3 = document.createElement('li');
itemEl3.textContent = 'Garlic';
itemEl3.classList.add('item');

const itemEl4 = document.createElement('li');
itemEl4.textContent = 'Tomatos';
itemEl4.classList.add('item');

const itemEl5 = document.createElement('li');
itemEl5.textContent = 'Herbs';
itemEl5.classList.add('item');

const itemEl6 = document.createElement('li');
itemEl6.textContent = 'Condiments';
itemEl6.classList.add('item');

listIngredients.append(itemEl1, itemEl2, itemEl3, itemEl4, itemEl5, itemEl6);

// console.log(listIngredients);
