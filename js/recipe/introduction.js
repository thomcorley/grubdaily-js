export function introduction(recipe) {
  // introduction paragraphs
  document.querySelector("div.first-paragraph p").innerHTML = recipe.description[0];

  const parentElement = document.querySelector("div.introduction-paragraphs");
  const latterDescriptionParagraphs = recipe.description.slice(1);

  latterDescriptionParagraphs.forEach( function(paragraph) {
    let paragraphElement = document.createElement("p");
    paragraphElement.innerHTML = paragraph;
    parentElement.appendChild(paragraphElement);
  });
};
