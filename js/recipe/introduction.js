import { htmlElement } from "../htmlRenderer.js"
import { els } from "../htmlRenderer.js"
import { render } from "../htmlRenderer.js"

export function introduction(recipe) {
  const recipeParentElement = document.querySelector("article.post.single");
  const latterDescriptionParagraphs = recipe.description.slice(1);

  const firstParagraphElement = els.p({innerHTML: recipe.description[0]});
  const firstParagraphDiv = els.div({className: "first-paragraph", children: [firstParagraphElement]});
  const introductionParentElement = render(recipeParentElement, els.div({className: "introduction-paragraphs", children: [firstParagraphDiv]}));

  latterDescriptionParagraphs.forEach(paragraph => {
    render(introductionParentElement, els.p({innerHTML: paragraph}));
  });
};
