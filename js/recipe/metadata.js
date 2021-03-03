import { render } from "../htmlRenderer.js"
import { htmlElement } from "../htmlRenderer.js"
import { span, header, div, time, p, br, h1 } from "../htmlRenderer.js"

export function metadata(recipe) {
  // Recipe Data
  const tags = recipe.tags;
  const title = recipe.name;
  const publishedAt = new Date(recipe.datePublished).toDateString();
  const serves = recipe.recipeYield;

  const recipeParentElement = document.querySelector("article.post.single");

  // TITLE
  render(recipeParentElement, h1({className: "post-title", innerHTML: title}));

  // METADATA
  const metaParentElement = render(recipeParentElement, div({className: "post-meta clear"}));

  // Date published
  const datePublishedElement = render(metaParentElement, time({innerHTML: publishedAt}));
  datePublishedElement.setAttribute("datetime", "2020-12-16T09:09:00+00:00");

  // Tags
  const tagElements = tags.map(tag => span({innerHTML: `${tag}&nbsp`}));
  const tagParentElement = render(metaParentElement, span({className: "tags", innerHTML: "/ Tags: &nbsp"}));
  render(tagParentElement, span({children: tagElements}));

  // Serves
  render(metaParentElement, span({className: "category", innerHTML: `Serves:&nbsp${serves}`}));
};
