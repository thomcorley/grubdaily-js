import { render } from "../htmlRenderer.js"
import { htmlElement } from "../htmlRenderer.js"
import { span, header, div, time, p, br, h1 } from "../htmlRenderer.js"

export function introduction(recipe) {
  const recipeParentElement = document.querySelector("article.post.single");
  const latterDescriptionParagraphs = recipe.description.slice(1);

  const firstParagraphElement = p({innerHTML: recipe.description[0]});
  const firstParagraphDiv = div({className: "first-paragraph", children: [firstParagraphElement]});
  const introductionParentElement = render(recipeParentElement, div({className: "introduction-paragraphs", children: [firstParagraphDiv]}));

  latterDescriptionParagraphs.forEach(paragraph => {
    render(introductionParentElement, p({innerHTML: paragraph}));
  });
};
