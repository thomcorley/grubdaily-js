import recipe_data from "../recipe_data.js"
import socialMediaSvgData from "../social_media_svg_data.js"

import { displayThumbnail } from "./display_thumbnail.js"
import { generateSocialMediaSvg } from "./generate_social_media_svg.js"

recipe_data.forEach(recipe => displayThumbnail(recipe));
socialMediaSvgData.forEach(socialMediaDatum => generateSocialMediaSvg(socialMediaDatum));
