export function metadata(recipe) {
  const tags = recipe.tags;
  const title = recipe.name;
  const publishedAt = new Date(recipe.datePublished).toDateString();
  const serves = recipe.recipeYield;

  // Create a basic function that returns the information needed for a generic HTML element using nested arrow functions

  const htmlElement = (element) => ({className = "", children = [], innerHTML, attributes = {} }) => ({
    element,
    className,
    children,
    innerHTML,
    attributes
  });

  const span = htmlElement("span");
  const header = htmlElement("header");
  const div = htmlElement("div");
  const time = htmlElement("time");

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

  const recipeParentElement = document.querySelector("article.post.single");

  // TITLE
  render(recipeParentElement, htmlElement("h1")({className: "post-title", innerHTML: title}));

  // METADATA
  const metaParentElement = render(recipeParentElement, div({className: "post-meta clear"}));

    // Date published
  const datePublishedElement = render(metaParentElement, time({innerHTML: publishedAt}));
  datePublishedElement.setAttribute("datetime", "2020-12-16T09:09:00+00:00");

    // Tags
  const tagElements = tags.map(tag => span({innerHTML: `${tag}&nbsp`}));
  const tagParentElement = render(metaParentElement, span({className: "tags", innerHTML: "/ Tags: &nbsp"}));
  render(tagParentElement, span({children: tagElements}));

    // Serves
  render(metaParentElement, span({className: "category", innerHTML: `Serves:&nbsp${serves}`}));
};
