import { htmlElement } from "../htmlRenderer.js"
import { render } from "../htmlRenderer.js"

export function image(recipe) {

  const imageAttributes = {
    src: recipe.image,
    alt: recipe.name,
    width: "900px",
    style: "padding-top: 20px;"
  }

  const recipeParentElement = document.querySelector("article.post.single");
  const imageDiv = render(recipeParentElement, htmlElement("div")({className: "recipe-image"}));
  render(imageDiv, htmlElement("img")({ attributes: imageAttributes }));
};
