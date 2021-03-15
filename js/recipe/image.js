import { recipeParentElement } from "../constants.js"
import { render } from "../htmlRenderer.js"
import * as tags from "../htmlRenderer.js"

// TODO: refactor this as a self-contained component
export function image(recipe) {

  const imageAttributes = {
    src: recipe.image,
    alt: recipe.name,
    width: "900px",
    style: "padding-top: 20px;"
  }

  const imageDiv = render(recipeParentElement, tags.div({className: "recipe-image"}));
  render(imageDiv, tags.img({ attributes: imageAttributes }));
};
