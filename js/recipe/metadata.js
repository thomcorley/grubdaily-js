export function displayMetadata(recipe) {
  // title
  document.querySelector(".post-title").innerHTML = recipe.name;

  // date published
  let date = new Date(recipe.datePublished);
  document.querySelector("time[itemprop='datePublished']").innerHTML = date.toDateString();

  // category
  document.querySelector("span.category").innerHTML = `Serves: ${recipe.recipeYield} /`;

  // hide the published tag if the recipe is not published
  if (recipe.published == false) {
    document.querySelector("p.published-tag").style.display = "none";
  }

  // tags
  const tagParentElement = document.querySelector("span.tags");
  tagParentElement.innerHTML = "Tags: ";
  let lastTag = recipe.tags.pop();

  recipe.tags.forEach(function(tag) {
    let tagElement = document.createElement("span");
    tagElement.innerHTML = `${tag},&nbsp`;
    tagParentElement.appendChild(tagElement);
  })

  let lastTagElement = document.createElement("span");
  lastTagElement.innerHTML = ` ${lastTag}`
  tagParentElement.appendChild(lastTagElement);
};
