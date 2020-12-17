import recipes from "./recipes.js"

function displayThumbnail(recipe) {
  const section = document.querySelector("section.posts.clear")
  const article = document.createElement("article");

  article.className = "post"

  article.innerHTML = `
    <h2 class="post-title">${recipe.name}</h2>

    <div class="thumbnail">
      <p><img src="${recipe.image}" alt="${recipe.name}"/></p>
    </div>
  `

  section.appendChild(article)
};

recipes.forEach(recipe => displayThumbnail(recipe));
