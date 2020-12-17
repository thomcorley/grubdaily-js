export function generateSocialMediaSvg(socialMediaDatum) {
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
