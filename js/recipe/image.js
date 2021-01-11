export function displayImage(recipe) {
  // image
  let imageElement = document.querySelector("div.recipe-image");

  imageElement.innerHTML = `
    <img
      src="${recipe.image}"
      width="900px"
      alt="${recipe.name}"
      style="padding-top: 20px;"
    </img>
  `;
};
