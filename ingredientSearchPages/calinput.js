const formCalorie = document.querySelector('#calorie-form');
const formIngredient = document.querySelector('#ingredient-form');

formCalorie.addEventListener('submit', event => {
  event.preventDefault();
  const maxcal = document.querySelector('#maxcal').value;
  // Add code to handle calorie form submission here
  window.location.href = `calrecipe.html?maxcal=${maxcal}`;
});

formIngredient.addEventListener('submit', event => {
  event.preventDefault();
  const ingredients = document.querySelector('#ingredients').value;
  // Add code to handle ingredient form submission here
  window.location.href = `recipe.html?ingredients=${ingredients}`;
});
