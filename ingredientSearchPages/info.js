const form = document.querySelector('#ingredient-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const ingredients = document.querySelector('#ingredients').value;
  window.location.href = `recipe.html?ingredients=${ingredients}`;
});
