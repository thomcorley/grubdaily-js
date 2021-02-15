export function displayIngredients(recipe) {
  // Ingredients list
  const ingredientsList = document.querySelector("ul");

  recipe.recipeIngredient.forEach(function(ingredientEntry) {
    let ingredientEntryElement = document.createElement("li");
    ingredientEntryElement.innerHTML = ingredientEntry; // TODO: add the `edit` button at the end of this once the data store is set up
    ingredientEntryElement.setAttribute("style", "list-style-type: none;");
    ingredientsList.appendChild(ingredientEntryElement);
  });
};
