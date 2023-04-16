const apiKey = 'f4bf5ca7a67f40f8943d37f38b3ca068';

const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('recipeId');



      
    
        
       
        fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`)
          .then(response => response.json())
          .then(recipe => {
            const recipeName = document.querySelector('#recipe-name');
            recipeName.textContent = recipe.title;
            const recipeImage = document.querySelector('#recipe-image');
            recipeImage.src = recipe.image;
            const ingredientsList = document.querySelector('#ingredients-list');
            ingredientsList.innerHTML = '';
            recipe.extendedIngredients.forEach(ingredient => {
              const li = document.createElement('li');
              li.textContent = `${ingredient.original} (${ingredient.amount} ${ingredient.unit})`;
              ingredientsList.appendChild(li);
            });
            const instructionsList = document.querySelector('#instructions-list');
            instructionsList.innerHTML = '';
            recipe.analyzedInstructions[0].steps.forEach(step => {
              const li = document.createElement('li');
              li.textContent = step.step;
              instructionsList.appendChild(li);
            });
            document.querySelector('#recipe-details').style.display = 'block';
          })
          .catch(error => console.error(error));
    