import * as els from "../htmlRenderer.js"

export function methodSteps(recipe) {
  const instructions = recipe.recipeInstructions.map(instruction => (
    els.li({
      className: "method-step",
      innerHTML: instruction })
  ));

  return els.div({
    className: "method-steps",
    children: [
      els.ol({
        children: instructions
      })
    ]
  });
};
