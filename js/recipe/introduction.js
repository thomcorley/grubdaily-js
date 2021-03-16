import { recipeParentElement } from "../constants.js"
import { render } from "../htmlRenderer.js"
import * as els from "../htmlRenderer.js"

export function introduction(recipe) {
  const firstParagraphElement = els.p({innerHTML: recipe.description[0]});
  const firstParagraphDiv = els.div({className: "first-paragraph", children: [firstParagraphElement]});
  const latterDescriptionParagraphs = recipe.description.slice(1);

  const latterParagraphElements = latterDescriptionParagraphs.map(paragraph => {
    return els.p({innerHTML: paragraph});
  });

  const children = [firstParagraphDiv].concat(latterParagraphElements);

  render(recipeParentElement, els.div({className: "introduction-paragraphs", children: children}));
};
