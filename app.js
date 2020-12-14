import recipes from "./recipes.js"

function displayThumbnail(recipe) {
  let section = document.querySelector("section.posts.clear")
  let article = document.createElement("article");

  article.className = "post"

  article.innerHTML = `
    <h2 class="post-title" itemprop="name headline">${recipe.name}</h2>

    <div class="post-content">
      <p><img src="${recipe.image}" alt="${recipe.name}" /></p>
    </div>
  `

  section.appendChild(article)
};

recipes.forEach(recipe => displayThumbnail(recipe));
