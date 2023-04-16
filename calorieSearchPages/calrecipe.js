const urlParams = new URLSearchParams(window.location.search);
const maxcalo = urlParams.get('maxcal');
const mincalo = urlParams.get('mincal');
const apiKey = 'f4bf5ca7a67f40f8943d37f38b3ca068';

fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apiKey}&minCalories=${maxcalo}&maxCalories=${mincalo}`)
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#recipe-table tbody');
    data.forEach(recipe => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = recipe.title;
      row.appendChild(nameCell);
      const imageCell = document.createElement('td');
const imageLink = document.createElement('a');
imageLink.href = `caldr.html?recipeId=${recipe.id}`;
const image = document.createElement('img');
image.src = recipe.image;
imageLink.appendChild(image);
imageCell.appendChild(imageLink);
row.appendChild(imageCell);
      tableBody.appendChild(row);
    });
  });