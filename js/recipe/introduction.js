import * as els from "../htmlRenderer.js"

export function introduction(recipe) {
  const latterDescriptionParagraphs = recipe.description.slice(1);

  return els.div({
    className: "introduction-paragraphs",
    children: [
      els.div({
        className: "first-paragraph",
        children: [
          els.p({ innerHTML: recipe.description[0] })
        ]
      }),
      ...latterDescriptionParagraphs.map(paragraph => els.p({ innerHTML: paragraph }) ),
      els.hr({}),
    ]
  });
};
