import * as els from "../htmlRenderer.js"

export function ingredients({ recipeIngredient }) {
  const children = recipeIngredient.map(ingredientEntry => els.li({ innerHTML: ingredientEntry }));

  return els.div({
    id: "ingredients",
    children: [
      els.ul({
        id: "ingredients-list",
        children: children
      })
    ]
  });
};
