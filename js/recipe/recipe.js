import recipe_data from "../recipe_data.js"
import { render } from "../htmlRenderer.js"
import { recipeParentElement } from "../constants.js"
import { metadata }  from "./metadata.js"
import { image } from "./image.js"
import { introduction } from "./introduction.js"
import { displayIngredients } from "./ingredients.js"
import { displayMethodSteps } from "./method_steps.js"

export function recipe() {
  let params = new URLSearchParams(window.location.search);
  let recipe_id = parseInt(params.get("id"));
  let recipe = recipe_data.find(recipe => recipe.id == recipe_id);

  return recipe;
}

let current_recipe = recipe();
current_recipe.published = true; // recipe is published by default

// TODO: populate these sections:
// Admin Panel (previous, next, publish, unpublish, edit)

function displayRecipe(recipe) {
  metadata(recipe);
  render(recipeParentElement, image(recipe));
  introduction(recipe);
  // displayIngredients(recipe);
  // displayMethodSteps(recipe);
};

displayRecipe(current_recipe);
