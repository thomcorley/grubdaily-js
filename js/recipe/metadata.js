export function metadata(recipe) {

  const data = {
    publishedLabelSelector: "p.published-tag",
    parentTagElementSelector: "span.tags",
    parentTagElementLabel: "Tags: ",
    tagNames: recipe.tags,
    metaElements: [
      {
        selector: ".post-title",
        data: recipe.name
      },
      {
        selector: "time[itemprop='datePublished']",
        data: new Date(recipe.datePublished).toDateString()
      },
      {
        selector: "span.category",
        data: `Serves: ${recipe.recipeYield} /`
      }
    ]
  }

  let publishedLabel = (published, selector) => {
    if (published == false) {
      document.querySelector(selector).style.display = "none";
    }
  }

  let parentTagElement = (selector, label) => {
    const element = document.querySelector(selector);
    element.innerHTML = label;
    return element
  }

  let populateMetaElements = (metaElements) => {
    metaElements.forEach(({ selector, data }) => {
      document.querySelector(selector).innerHTML = data;
    });
  }

  let populateTags = (tagNames, parentElement) => {
    tagNames.forEach((tagName) => {
      const element = document.createElement("span");
      element.innerHTML = `${tagName},&nbsp`;
      parentElement.appendChild(element);
    })
  };

  publishedLabel(recipe.published, data.publishedLabelSelector);
  populateMetaElements(data.metaElements);
  const parentElement = parentTagElement(data.parentTagElementSelector, data.parentTagElementLabel);
  populateTags(data.tagNames, parentElement)
};
