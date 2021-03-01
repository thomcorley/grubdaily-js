import { htmlElement } from "../htmlRenderer.js"
import { els } from "../htmlRenderer.js"
import { render } from "../htmlRenderer.js"

export function metadata(recipe) {
  // Recipe Data
  const tags = recipe.tags;
  const title = recipe.name;
  const publishedAt = new Date(recipe.datePublished).toDateString();
  const serves = recipe.recipeYield;

  const recipeParentElement = document.querySelector("article.post.single");

  // TITLE
  render(recipeParentElement, htmlElement("h1")({className: "post-title", innerHTML: title}));

  // METADATA
  const metaParentElement = render(recipeParentElement, els.div({className: "post-meta clear"}));

  // Date published
  const datePublishedElement = render(metaParentElement, els.time({innerHTML: publishedAt}));
  datePublishedElement.setAttribute("datetime", "2020-12-16T09:09:00+00:00");

  // Tags
  const tagElements = tags.map(tag => els.span({innerHTML: `${tag}&nbsp`}));
  const tagParentElement = render(metaParentElement, els.span({className: "tags", innerHTML: "/ Tags: &nbsp"}));
  render(tagParentElement, els.span({children: tagElements}));

  // Serves
  render(metaParentElement, els.span({className: "category", innerHTML: `Serves:&nbsp${serves}`}));
};
