import { recipeParentElement } from "../constants.js"
import { render } from "../htmlRenderer.js"
import * as els from "../htmlRenderer.js"

export function metadata({ tags, name, datePublished, recipeYield }) {
  const date = new Date(datePublished).toDateString();
  const tagElements = tags.map(tag => els.span({innerHTML: `${tag},&nbsp`})); // TODO: remove last comma

  const metaChildren = [
    els.time({
      innerHTML: date,
      datetime: "2020-12-16T09:09:00+00:00"
    }),
    els.span({
      className: "tags",
      innerHTML: `Tags: ${tags.join(", ")}`
    }),
    els.span({
      className: "category",
      innerHTML: `Serves:&nbsp${recipeYield}`
    })
  ];

  return els.div({
    className: "do-not-render",
    children: [
      els.h1({
        className: "post-title",
        innerHTML: name
      }),
      els.div({
        className: "post-meta clear",
        children: metaChildren
      })
    ]
  });
};
