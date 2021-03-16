import { recipeParentElement } from "../constants.js"
import * as els from "../htmlRenderer.js"

export function image({image, name}) {
  const imageAttributes = {
    src: image,
    alt: name,
    width: "900px",
    style: "padding-top: 20px;"
  }

  return els.div({
    className: "recipe-image",
    children: [
      els.img({ attributes: imageAttributes })
    ]
  });
};
