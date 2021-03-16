import { recipeParentElement } from "../constants.js"
import { render } from "../htmlRenderer.js"
import * as els from "../htmlRenderer.js"

export function metadata({ tags, name, datePublished, recipeYield }) {
  render(recipeParentElement, els.h1({className: "post-title", innerHTML: name}));
  // TODO: Instead of passing siblings in as an extra argument, we could just create a containing div and render just that.
  // Think about how we would tell `render` to render the children but not the parent element itself.

  const date = new Date(datePublished).toDateString();
  const tagElements = tags.map(tag => els.span({innerHTML: `${tag},&nbsp`})); // TODO: remove last comma

  const metaChildren = [
    els.time({
      innerHTML: date,
      datetime: "2020-12-16T09:09:00+00:00",
      attributes: null
    }),
    els.span({
      className: "tags",
      innerHTML: "/ Tags: &nbsp"
    }),
    els.span({
      children: [
        els.span({
          children: tagElements
        })
      ]
    }),
    els.span({
      className: "category",
      innerHTML: `Serves:&nbsp${recipeYield}`
    })
  ];

  const metaParentElement = render(recipeParentElement, els.div({className: "post-meta clear", children: metaChildren}));
};
