import recipe_data from "./recipe_data.js"

export function recipe() {
  let params = new URLSearchParams(window.location.search);
  let recipe_id = parseInt(params.get("id"));
  let recipe = recipe_data.find(recipe => recipe.id == recipe_id);

  return recipe;
}

let r = recipe();
r.published = true; // recipe is published by default

// title
document.querySelector(".post-title").innerHTML = r.name;

// date published
let date = new Date(r.datePublished);
document.querySelector("time[itemprop='datePublished']").innerHTML = date.toDateString();

// category
document.querySelector("span.category").innerHTML = `Serves: ${r.recipeYield} /`;

// hide the published tag if the recipe is not published
if (r.published == false) {
  document.querySelector("p.published-tag").style.display = "none";
}

// tags
const tagParentElement = document.querySelector("span.tags");
tagParentElement.innerHTML = "Tags: ";
let lastTag = r.tags.pop();
console.log(lastTag)

r.tags.forEach(function(tag) {
  let tagElement = document.createElement("span");
  tagElement.innerHTML = `${tag},&nbsp`;
  tagParentElement.appendChild(tagElement);
})

let lastTagElement = document.createElement("span");
lastTagElement.innerHTML = ` ${lastTag}`
tagParentElement.appendChild(lastTagElement);

// image
let imageElement = document.querySelector("div.recipe-image");

imageElement.innerHTML = `
  <img
    src="${r.image}"
    width="900px"
    alt="${r.name}"
    style="padding-top: 20px;"
  </img>
`;

// TODO: populate these sections:
// Admin Panel (previous, next, publish, unpublish, edit)

// introduction paragraphs
document.querySelector("div.first-paragraph p").innerHTML = r.description[0];

const parentElement = document.querySelector("div.introduction-paragraphs");
const latterDescriptionParagraphs = r.description.slice(1);

latterDescriptionParagraphs.forEach( function(paragraph) {
  let paragraphElement = document.createElement("p");
  paragraphElement.innerHTML = paragraph;
  parentElement.appendChild(paragraphElement);
});

// Ingredients list
const ingredientsList = document.querySelector("ul");

r.recipeIngredient.forEach(function(ingredientEntry) {
  let ingredientEntryElement = document.createElement("li");
  ingredientEntryElement.innerHTML = ingredientEntry; // TODO: add the `edit` button at the end of this once the data store is set up
  ingredientEntryElement.setAttribute("style", "list-style-type: none;");
  ingredientsList.appendChild(ingredientEntryElement);
});

// Method steps list
const instructionsList = document.querySelector("ol");

 r.recipeInstructions.forEach(function(instruction) {
  let instructionElement = document.createElement("li");
  instructionElement.innerHTML = instruction;
  instructionsList.appendChild(instructionElement);
  instructionsList.appendChild(document.createElement("br"))
 });
