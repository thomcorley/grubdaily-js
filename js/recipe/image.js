import { render } from "../htmlRenderer.js"
import { htmlElement } from "../htmlRenderer.js"
import { span, header, div, time, p, br, h1 } from "../htmlRenderer.js"

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
