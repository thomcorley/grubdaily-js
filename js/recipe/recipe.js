import recipe_data from "../recipe_data.js"
import { render } from "../htmlRenderer.js"
import { recipeParentElement } from "../constants.js"
import { metadata }  from "./metadata.js"
import { image } from "./image.js"
import { introduction } from "./introduction.js"
import { ingredients } from "./ingredients.js"
import { methodSteps } from "./method_steps.js"

export function recipe() {
  let params = new URLSearchParams(window.location.search);
  let recipe_id = parseInt(params.get("id"));
  let recipe = recipe_data.find(recipe => recipe.id == recipe_id);

  return recipe;
}

let current_recipe = recipe();
current_recipe.published = true; // recipe is published by default

function displayRecipe(recipe) {
  metadata(recipe);
  render(recipeParentElement, image(recipe));
  render(recipeParentElement, introduction(recipe));
  render(recipeParentElement, ingredients(recipe));
  render(recipeParentElement, methodSteps(recipe));
};

displayRecipe(current_recipe);
