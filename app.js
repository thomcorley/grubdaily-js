import recipes from "./recipes.js"

const socialMediaSvgData = [
  {
    "title":"facebook",
    "url":"https://facebook.com/grubdaily",
    "viewBox":"0 0 12 23.1",
    "path":"M12,3.8H9.8c-1.7,0-2,.8-2,2V8.5h4.1l-0.5,4.1H7.8V23.1H3.5V12.6H0V8.5H3.5v-3C3.5,1.9,5.7,0,8.8,0L12,0.2V3.8Z"
  },
  {
    "title":"twitter",
    "url":"twitter.com/grubdaily_tom",
    "viewBox":"0 0 12 9.7",
    "path":"M10.8,2.4c0,0.1,0,.2,0,0.3a6.9,6.9,0,0,1-7,7A7,7,0,0,1,0,8.6H0.6A4.9,4.9,0,0,0,3.6,7.6,2.5,2.5,0,0,1,1.3,5.9H2.5a2.5,2.5,0,0,1-2-2.4h0L1.6,3.7A2.5,2.5,0,0,1,.8.4,7,7,0,0,0,5.9,3a2.8,2.8,0,0,1-.1-0.6A2.5,2.5,0,0,1,10.1.8,4.8,4.8,0,0,0,11.7.2a2.5,2.5,0,0,1-1.1,1.4L12,1.2A5.3,5.3,0,0,1,10.8,2.4Z"
  },
  {
    "title":"instagram",
    "url":"https://www.instagram.com/grubdaily",
    "viewBox":"0 0 12 12",
    "path":"M12,10.5A1.5,1.5,0,0,1,10.5,12H1.5A1.5,1.5,0,0,1,0,10.5V1.5A1.5,1.5,0,0,1,1.5,0h8.9A1.5,1.5,0,0,1,12,1.5v8.9ZM10.6,5.1H9.6a3.4,3.4,0,0,1,.2,1A3.7,3.7,0,0,1,6,9.7,3.7,3.7,0,0,1,2.3,6.1a3.4,3.4,0,0,1,.2-1H1.3v5.1a0.5,0.5,0,0,0,.5.5h8.4a0.5,0.5,0,0,0,.5-0.5V5.1ZM6,3.6A2.4,2.4,0,0,0,3.6,6,2.4,2.4,0,0,0,6,8.3,2.4,2.4,0,0,0,8.4,6,2.4,2.4,0,0,0,6,3.6Zm4.6-1.8a0.5,0.5,0,0,0-.5-0.5H8.7a0.5,0.5,0,0,0-.5.5V3.2a0.5,0.5,0,0,0,.5.5h1.4a0.5,0.5,0,0,0,.5-0.5V1.9Z"
  },
  {
    "title":"pinterest",
    "url":"https://www.pinterest.co.uk/grubdaily",
    "viewBox":"0 0 12 15.6",
    "path":"M6.4,0C9.3,0,12,2,12,5.1s-1.5,6.1-4.8,6.1A2.5,2.5,0,0,1,5,10.2c-0.7,2.8-.7,3.2-2.2,5.4H2.6c-0.1-.6-0.1-1.2-0.1-1.8S3.3,9.1,3.8,7.2a3.7,3.7,0,0,1-.3-1.6A2,2,0,0,1,5.2,3.5,1.2,1.2,0,0,1,6.4,4.8c0,1.2-.8,2.4-0.8,3.5A1.4,1.4,0,0,0,7,9.7C9.2,9.7,9.8,6.6,9.8,5S8.3,1.5,6.1,1.5A4.2,4.2,0,0,0,1.7,5.8a5.1,5.1,0,0,0,.7,2.1A1.3,1.3,0,0,1,2,9H1.8C0.5,8.6,0,6.8,0,5.6,0,2.1,3.2,0,6.4,0Z"
  },
]

function displayThumbnail(recipe) {
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


function generateSocialMediaSvg(socialMediaDatum) {
  const socialDiv = document.querySelector(".social.clear");
  let anchorElement = document.createElement("a");
  let datum = socialMediaDatum

  anchorElement.setAttribute("href", datum.url)

  anchorElement.innerHTML = `
    <svg title="${datum.title}"
      width="16"
      height="16"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      id="${datum.title}-icon"
      viewBox="${datum.viewBox}">
      <path d="${datum.path}" />
    </svg>
  `

  socialDiv.appendChild(anchorElement);
}

socialMediaSvgData.forEach(socialMediaDatum => generateSocialMediaSvg(socialMediaDatum));

recipes.forEach(recipe => displayThumbnail(recipe));
