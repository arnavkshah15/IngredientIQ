const urlParams = new URLSearchParams(window.location.search);
const ingredients = urlParams.get('ingredients');
const apiKey = 'f4bf5ca7a67f40f8943d37f38b3ca068';


fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}`)
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#recipe-table tbody');
    data.forEach(recipe => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const nameLink = document.createElement('a');
      nameLink.href = `detailedRecipe.html?recipeId=${recipe.id}`;
      nameLink.classList.add('recipe-name');
      nameLink.textContent = recipe.title;
      nameCell.appendChild(nameLink);
      row.appendChild(nameCell);
      const imageCell = document.createElement('td');
      const imageLink = document.createElement('a');
      imageLink.href = `detailedRecipe.html?recipeId=${recipe.id}`;
      const image = document.createElement('img');
      image.src = recipe.image;
      image.classList.add('recipe-image');
      imageLink.appendChild(image);
      imageCell.appendChild(imageLink);
      row.appendChild(imageCell);
      tableBody.appendChild(row);
    });
  });