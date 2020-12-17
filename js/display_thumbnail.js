export function displayThumbnail(recipe) {
  const section = document.querySelector("section.posts.clear")
  const article = document.createElement("article");

  article.className = "post"

  article.innerHTML = `
    <div class="thumbnail">
      <a href="/recipe.html">
        <img src="${recipe.image}" alt="${recipe.name}" title="${recipe.name}"/>
      </a>
    </div>
  `

  section.appendChild(article)
};
