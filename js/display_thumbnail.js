export function displayThumbnail(recipe) {
  const section = document.querySelector("section.posts.clear")
  const article = document.createElement("article");

  article.className = "post"

  article.innerHTML = `
    <div class="thumbnail">
      <p><img src="${recipe.image}" alt="${recipe.name}" title="${recipe.name}"/></p>
    </div>
  `

  section.appendChild(article)
};
