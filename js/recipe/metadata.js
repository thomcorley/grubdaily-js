export function metadata(recipe) {
  const tags = recipe.tags;

  // Create a basic function that returns the information needed for a generic HTML element using nested arrow functions

  const htmlElement = (element) => ({className = "", children = [], innerHTML }) => ({
    element,
    className,
    children,
    innerHTML
  });

  const span = htmlElement("span");

  // Create a `render` method which should takes a target element abd a hash of HTML params.
  // This method now creates the element and populates it with innerHtml, if present, or appends with children
  // it finally appends the target element with the element just created.

  const render = (target, { element, className, children, innerHTML}) => {
    const el = document.createElement(element);

    if (innerHTML) {
      el.innerHTML = innerHTML;
    } else if (children.length > 0) {
      children.forEach(child => {
        el.appendChild(render(el, child));
      })
    };

    if (className != "") {
      el.className = className;
    }

    target.appendChild(el);

    return el
  };

  const metaParentElement = document.querySelector("div.post-meta.clear") // TODO: move this to a data hash

  // TAGS
  let tagElements = tags.map(tag => span({innerHTML: `${tag}&nbsp`}));
  const tagParentElement = render(metaParentElement, span({className: "tags", innerHTML: "Tags:&nbsp"}));
  render(tagParentElement, span({children: tagElements}));

  // TITLE
  // TODO: fill out this section

  // DATE PUBLISHED
  // TODO: fill out this section

  // CATEGORY
  // TODO: fill out this section


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
        selector: "time[itemprop='datePublished']", // check what to do with itemprop, it may need to be another arg in the render method
        data: new Date(recipe.datePublished).toDateString(),
      },
      {
        selector: "span.category",
        data: `Serves: ${recipe.recipeYield} /`
      }
    ]
  }

  // let publishedLabel = (published, selector) => {
  //   if (published == false) {
  //     document.querySelector(selector).style.display = "none";
  //   }
  // }

  // let parentTagElement = (selector, label) => {
  //   const element = document.querySelector(selector);
  //   element.innerHTML = label;
  //   return element
  // }

  // let populateMetaElements = (metaElements) => {
  //   metaElements.forEach(({ selector, data }) => {
  //     document.querySelector(selector).innerHTML = data;
  //   });
  // }

  // let populateTags = (tagNames, parentElement) => {
  //   tagNames.forEach((tagName) => {
  //     const element = document.createElement("span");
  //     element.innerHTML = `${tagName},&nbsp`;
  //     parentElement.appendChild(element);
  //   })
  // };

  // publishedLabel(recipe.published, data.publishedLabelSelector);
  // populateMetaElements(data.metaElements);
  // const parentElement = parentTagElement(data.parentTagElementSelector, data.parentTagElementLabel);
  // populateTags(data.tagNames, parentElement)
};
