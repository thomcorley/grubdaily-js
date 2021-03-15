import { recipeParentElement } from "../constants.js"
import { render } from "../htmlRenderer.js"
import * as els from "../htmlRenderer.js"

export function metadata({ tags, name, datePublished, recipeYield }) {
  render(recipeParentElement, els.h1({className: "post-title", innerHTML: name}));

  const date = new Date(datePublished).toDateString();
  const tagElements = tags.map(tag => els.span({innerHTML: `${tag}&nbsp`}));

  const metaChildren = [
    els.time({innerHTML: date}),
    els.span({
      className: "tags",
      innerHTML: "/ Tags: &nbsp",
      children: [
        els.span({children: tagElements})
      ]
    }),
    els.span({
      className: "category",
      innerHTML: `Serves:&nbsp${recipeYield}`
    })
  ];
  const metaParentElement = render(recipeParentElement, els.div({className: "post-meta clear", children: metaChildren}));
};
