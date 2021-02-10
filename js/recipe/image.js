// display the image
export function image(recipe) {
  const imageElement = document.querySelector("div.recipe-image");

  const imageAttributes = {
    url: recipe.image,
    alt: recipe.name
  }

  imageElement.innerHTML = `
    <img
      src="${imageAttributes.url}"
      width="900px"
      alt="${imageAttributes.alt}"
      style="padding-top: 20px;"
    </img>
  `;
};
