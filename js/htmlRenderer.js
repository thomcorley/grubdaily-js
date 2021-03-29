import { recipeParentElement } from "./constants.js"

const clearElements = (elements) => {
  while (elements.firstChild) {
    elements.removeChild(elements.lastChild);
  }
};

const htmlElement = (element) => ({
  id = "",
  className = "",
  children = [],
  innerHTML,
  attributes = {}
}) => ({
  id,
  element,
  className,
  children,
  innerHTML,
  attributes
});

export const time = ({ datetime, ...rest }) => htmlElement("time")({
  ...rest,
  attributes: {
    ...rest.attributes,
    datetime: datetime
  }
});
export const span = htmlElement("span");
export const header = htmlElement("header");
export const div = htmlElement("div");
export const p = htmlElement("p");
export const br = htmlElement("br");
export const hr = htmlElement("hr");
export const h1 = htmlElement("h1");
export const img = htmlElement("img");
export const ul = htmlElement("ul");
export const ol = htmlElement("ol");
export const li = htmlElement("li");

export const render = (target, { element, id, className, children, innerHTML, attributes }) => {
  // TODO:
  // Think about how to use clearElement to remove only the elements that
  // we want Try grabbing the document to create a diff, and only render the
  // element if it doesn't exist already ---> See how this is done in React
  //
  // ---> See how this is done in React

 // Uses the (never rendered) className `do-not-render` to indicate that only
 // the children should be rendered and the containing div thrown away.
  if (className == "do-not-render") {
    children.forEach(child => {
      target.appendChild(render(target, child));
    })
  } else {
    const el = document.createElement(element);
    const attributeKeys = Object.keys(attributes);

    if (attributeKeys.length > 0) {
      attributeKeys.forEach(key => {
        el.setAttribute(key, attributes[key])
      });
    };

    if (innerHTML) {
      el.innerHTML = innerHTML;
    } else if (children.length > 0) {
      children.forEach(child => {
        el.appendChild(render(el, child));
      })
    };

    if (id != "") {
      el.id = id;
    }

    if (className != "") {
      el.className = className;
    }

    target.appendChild(el);

    return el
  };
};
