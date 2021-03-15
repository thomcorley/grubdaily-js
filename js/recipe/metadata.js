import { recipeParentElement } from "../constants.js"
import { render } from "../htmlRenderer.js"
import * as htmlTag from "../htmlRenderer.js"
import { h1 } from "../htmlRenderer.js"

export function metadata({ tags, name, datePublished, recipeYield }) {
  // Date
  const date = new Date(datePublished).toDateString();

  // Title
  render(recipeParentElement, h1({className: "post-title", innerHTML: name}));

  // Metadata
  const metaParentElement = render(recipeParentElement, htmlTag.div({className: "post-meta clear"}));

  // Date published
  const datePublishedElement = render(metaParentElement, htmlTag.time({innerHTML: date}));
  datePublishedElement.setAttribute("datetime", "2020-12-16T09:09:00+00:00");

  // Tags
  const tagElements = tags.map(tag => htmlTag.span({innerHTML: `${tag}&nbsp`}));
  const tagParentElement = render(metaParentElement, htmlTag.span({className: "tags", innerHTML: "/ Tags: &nbsp"}));
  render(tagParentElement, htmlTag.span({children: tagElements}));

  // Serves
  render(metaParentElement, htmlTag.span({className: "category", innerHTML: `Serves:&nbsp${recipeYield}`}));
};
