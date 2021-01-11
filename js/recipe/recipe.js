import recipe_data from "../recipe_data.js"
import { displayMetadata }  from "./metadata.js"
import { displayImage } from "./image.js"
import { displayIntroduction } from "./introduction.js"
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

displayMetadata(current_recipe);

// TODO: populate these sections:
// Admin Panel (previous, next, publish, unpublish, edit)

displayImage(current_recipe);
displayIntroduction(current_recipe);
displayIngredients(current_recipe);
displayMethodSteps(current_recipe);


